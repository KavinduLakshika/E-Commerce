import React, { useState } from 'react';
import Sidebar from '../../../Components/SideBar/SideBar';
import './Add.css'

const Add = () => {
  const initialFormData = {
    image: null,
    name: '',
    gender:'',
    category: '',
    price: '',
    size: [],
    quantity: '',
    colors: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL  '];
  const colors = [
    { name: 'Red', code: '#FF0000' },
    { name: 'Brick Red', code: '#CB4154' },
    { name: 'Burgundy', code: '#800020' },
    { name: 'Maroon', code: '#800000' },
    { name: 'Brown', code: '#A52A2A' },
    { name: 'Sienna', code: '#A0522D' },
    { name: 'Copper', code: '#B87333' },
    { name: 'Orange', code: '#FFA500' },
    { name: 'Coral', code: '#FF7F50' },
    { name: 'Peach', code: '#FFDAB9' },
    { name: 'Gold', code: '#FFD700' },
    { name: 'Yellow', code: '#FFFF00' },
    { name: 'Mustard', code: '#FFDB58' },
    { name: 'Khaki', code: '#F0E68C' },
    { name: 'Cream', code: '#FFFDD0' },
    { name: 'Beige', code: '#F5F5DC' },
    { name: 'Olive', code: '#808000' },
    { name: 'Green', code: '#008000' },
    { name: 'Forest Green', code: '#228B22' },
    { name: 'Emerald', code: '#50C878' },
    { name: 'Mint', code: '#98FF98' },
    { name: 'Lime', code: '#00FF00' },
    { name: 'Teal', code: '#008080' },
    { name: 'Turquoise', code: '#40E0D0' },
    { name: 'Cyan', code: '#00FFFF' },
    { name: 'Light Blue', code: '#ADD8E6' },
    { name: 'Steel Blue', code: '#4682B4' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Navy', code: '#000080' },
    { name: 'Purple', code: '#800080' },
    { name: 'Lavender', code: '#E6E6FA' },
    { name: 'Magenta', code: '#FF00FF' },
    { name: 'Pink', code: '#FFC0CB' },
    { name: 'Plum', code: '#8E4585' },
    { name: 'Gray', code: '#808080' },
    { name: 'Black', code: '#000000' },
    { name: 'Charcoal', code: '#36454F' },
    { name: 'Silver', code: '#C0C0C0' },
    { name: 'Ivory', code: '#FFFFF0' },
    { name: 'White', code: '#FFFFFF' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'image') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else if (type === 'checkbox') {
      if (name === 'size') {
        // Handle size checkbox
        setFormData({
          ...formData,
          size: checked
            ? [...formData.size, value]
            : formData.size.filter((size) => size !== value),
        });
      } else if (name === 'colors') {
        // Handle colors checkbox
        setFormData({
          ...formData,
          colors: checked
            ? [...formData.colors, value]
            : formData.colors.filter((color) => color !== value),
        });
      }
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
      <div className="container pt-4 mt-4 pb-5">
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

            <div className="col-md-3 mb-3">
              <label className="form-label">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className="form-control">
                <option value="">Select Gender</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} required className="form-control">
                <option value="">Select Category</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Shirts">Shirts</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Size</label>
              <div className="d-flex flex-wrap gap-2">
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

            <div className="col-md-12 mb-3">
              <label className="form-label">Colors</label>
              <div className="color-grid">
                {colors.map((color) => (
                  <div className="form-check form-check-inline" key={color.code}>
                    <label className="custom-checkbox-container">
                      <input
                        type="checkbox"
                        name="colors"
                        value={color.name}
                        checked={formData.colors.includes(color.name)}
                        onChange={handleChange}
                      />
                      <span className="custom-checkmark" style={{ backgroundColor: color.code }}></span>
                    </label>
                    <span className="form-check-label">{color.name}</span>
                  </div>
                ))}
              </div>
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