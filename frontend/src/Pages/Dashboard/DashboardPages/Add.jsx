import React, { useState } from 'react';
import Sidebar from '../../../Components/SideBar/SideBar';
import './Add.css'

const Add = () => {
  const initialFormData = {
    image: null,
    name: '',
    category: '',
    price: '',
    size: [],
    quantity: '',
    colors: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const sizes = ['Small', 'Medium', 'Large']; // Example sizes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        size: checked
          ? [...formData.size, value]
          : formData.size.filter((size) => size !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="body" id="body-pd">
      <Sidebar />
      <div className="container pt-4 mt-4">
        <h1 className="mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="add-product-form">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Image</label>
              <input type="file" name="image" accept="image/*" onChange={handleChange} className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} required className="form-control">
                <option value="">Select Category</option>
                <option value="T">T</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Size</label>
              <div>
                {sizes.map((size) => (
                  <div className="form-check form-check-inline align-items-center" key={size}>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        name="size"
                        value={size}
                        checked={formData.size.includes(size)}
                        onChange={handleChange}
                      />
                      <div className="line"></div>
                      <div className="line line-indicator"></div>
                    </label>
                    <label className="form-check-label ms-2">{size}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required className="form-control" />
            </div>

            <div className="d-flex">
              <button type="button" onClick={handleReset} className="btn btn-danger ms-auto">Reset</button>
              <button type="submit" className="btn btn-primary ms-2">Add Product</button>
            </div>


          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
