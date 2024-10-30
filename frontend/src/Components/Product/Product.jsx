/* eslint-disable react/prop-types */
import { useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { BsBagFill } from "react-icons/bs";
import './Product.css';

const Product = ({
    title,
    description,
    price,
    images,
    sizes,
    colors,
}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="container product-page mt-5">
            <div className="row">
                <div className="col-md-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Product ${index + 1}`}
                            className={`img-thumbnail mb-2 ${selectedImage === img ? 'selected' : ''}`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                <div className="col-md-5">
                    <img src={selectedImage} alt="Selected Product" className="main-image img-fluid" />
                </div>

                <div className="col-md-5">
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <h4 className="price">LKR {price}</h4>
                    <p>Please select your preferred color and size</p>

                    <div className="mb-3">
                        {colors.map((color, index) => (
                            <button key={index} className="btn btn-outline-secondary me-2">
                                {color}
                            </button>
                        ))}
                    </div>

                    <div className="mb-4">
                        {sizes.map((size) => (
                            <button key={size} className="btn btn-outline-dark me-2">
                                {size}
                            </button>
                        ))}
                    </div>

                    <div className='d-flex'>
                        <button className="btn btn-info me-2">
                            <BsBagFill /> Buy Now
                        </button>
                        <button className="btn btn-secondary">
                            <LuShoppingCart /> Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
