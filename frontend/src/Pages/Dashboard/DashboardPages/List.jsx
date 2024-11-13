import React from 'react'
import Sidebar from '../../../Components/SideBar/SideBar'
import Table from '../../../Components/Table/Table'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../config';

const List = () => {
  const columns = ["ID", "Products Name", 'Category', 'type', 'Qty', 'Price', 'colors', 'Stock', 'Actions'];
  const [data, setData] = useState([]);
  const btnName = 'Add New Product';
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState({});

  const title = 'Product';
  const invoice = 'Product.pdf';
  useEffect(() => {
    fetchProductList(categories);
    fetchCategories();
  }, [categories]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/categories`);
      const categoryMap = response.data.reduce((acc, category) => {
        acc[category.catId] = category.catName;
        return acc;
      }, {});
      setCategories(categoryMap);
    } catch (error) {
      setError(`Error fetching categories: ${error.message}`);
    }
  };

  const fetchProductList = async (categoryMap = categories) => {
    try {
      const response = await fetch(`${config.BASE_URL}/products`);
      if (!response.ok) {
        setError(`Failed to fetch product: ${response.status} ${response.statusText}`);
        return;
      }
      const product = await response.json();
      const formattedData = product.map(product => [
        product.productId,
        product.productName,
        categoryMap[product.category_catId],
        product.productDescription,
        product.productQty,
        product.productPrice,
        product.productColor,
        <select
          className='form-control'
          value={product.productStatus}
          onChange={(e) => handleStatusChange(product.productId, e.target.value)}
        >
          <option value="In stock">In stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>,
        <button onClick={() => handleDelete(product.productId)} className="btn btn-danger btn-sm">
          <i class='bx bx-trash'></i>
        </button>
      ]);
      setData(formattedData);
    } catch (error) {
      setError(`Error fetching product list: ${error.message}`);
    }
  };

  const handleStatusChange = async (productId, newStatus) => {
    try {
      const response = await fetch(`${config.BASE_URL}/product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productStatus: newStatus }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to update product status: ${response.status} ${response.statusText}. ${errorData.message || ''}`);
      }
      // Refresh the product list to show the updated status
      fetchProductList(categories);
    } catch (error) {
      setError(`Error updating product status: ${error.message}`);
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await axios.delete(`${config.BASE_URL}/product/${productId}`);
        if (response.status === 200) {
          // Filter out the deleted product from the state
          setData((prevData) => prevData.filter((product) => product[0] !== productId));
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error("Delete error:", error);
        setError(`Error deleting product: ${error.message}`);
      }
    }
  };


  const navigate = useNavigate();

  const handleAddBtn = () => {
    navigate('/add');
  }

  return (
    <div className="body" id="body-pd">
      <Sidebar />
      <div className="pt-4">
        <h1>List</h1>
        <Table
          data={data}
          columns={columns}
          btnName={btnName}
          title={title}
          invoice={invoice}
          showDate={false}
          onAdd={handleAddBtn}
          showActions={false}
        />
      </div>

    </div>
  )
}

export default List