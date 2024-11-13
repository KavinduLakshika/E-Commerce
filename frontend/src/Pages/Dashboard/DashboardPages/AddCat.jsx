import React, { useState } from 'react';
import Sidebar from '../../../Components/SideBar/SideBar';
import './AddCat.css';
import axios from 'axios';
import config from '../../../config';
import Table from '../../../Components/Table/Table'
import { useEffect } from 'react';

const AddCat = () => {
    const initialFormData = {
        catName: '',
        catSubName: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChanger = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(`${config.BASE_URL}/createCategory`, {
                catName: formData.catName,
            });
            if (response.status === 201) {
                setSuccess(true);
                handleReset();
            }
            console.log('Sending data to backend:', formData);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred while creating the Product Category');
            console.error('Error creating product category:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    const [data, setData] = useState([]);
    const columns = ['id', 'Name', 'Action']

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/categories`);
            const category = response.data;
            const formattedData = category.map(category => [
                category.catId,
                category.catName,
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(category.catId)}>
                    <i className='bx bx-trash'></i>
                </button>
            ]);
            setData(formattedData);
        } catch (error) {
            setError(`Error fetching category list: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                const response = await axios.delete(`${config.BASE_URL}/category/${id}`);
                if (response.status === 200) {
                    setSuccess(true);
                    fetchCategory();  // Refresh the category list after deletion
                }
            } catch (error) {
                setError(`Error deleting category: ${error.message}`);
            }
        }
    };

    return (
        <div className="body" id="body-pd">
            <Sidebar />
            <div className="container pt-4 mt-4 pb-5">
                <h1 className="mb-4">Add Product Categories</h1>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="alert alert-success" role="alert">
                         created successfully!
                    </div>
                )}
                <div className="cat-forms row">
                    <form className='col-md-5 cat' onSubmit={handleSubmit}>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Category Name</label>
                            <input type="text" name="catName" id="catName" onChange={handleChanger} className="form-control" value={formData.catName} />
                        </div>
                        <div className="d-flex">
                            <button type="button" onClick={handleReset} className="btn btn-danger ms-auto" disabled={loading} >Clear</button>
                            <button type="submit" className="btn btn-primary ms-2" disabled={loading}>{loading ? 'Add Product Category...' : 'Add Product Category'}</button>
                        </div>
                        <Table
                            data={data}
                            columns={columns}
                            showDate={false}
                            showActions={false}
                            showButton={false}
                        />
                    </form>

                    <form className='col-md-5'>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Subcategory Name</label>
                            <input type="text" name="catSubName" id="catSubName" onChange={handleChanger} className="form-control" value={formData.catSubName} />
                        </div>
                        <div className="d-flex">
                            <button type="reset" className="btn btn-danger ms-auto">Clear</button>
                            <button type="submit" className="btn btn-primary ms-2"> Add Product Sub Category</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCat;
