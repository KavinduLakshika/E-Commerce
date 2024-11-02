import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';
import NavBar from '../NavBar/NavBar';

const Product = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const location = useLocation();
    const { product } = location.state || {};

    useEffect(() => {
        setSelectedImage(product.images[0] || '');
    }, [product]);

    if (!product) return <div>No product selected</div>;

    const increaseQuantity = () => setQuantity(prevQty => (prevQty < product.maxQuantity ? prevQty + 1 : prevQty));
    const decreaseQuantity = () => setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));

    return (
        <div>
            <NavBar />
            <div className="container-fluid product-page mt-5">
                <div className="row">
                    <div className="col-md-5 d-flex">
                        <img src={selectedImage} alt="Selected Product" className="main-image img-fluid" />
                        <div className="additional-images">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Product ${index + 1}`}
                                    className={`img-thumbnail mb-2 ${selectedImage === img ? 'selected' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-5 des">
                        <h3 className="product-title">{product.prodName}</h3>
                        <h6 className="price">LKR {product.prodPrice}</h6>
                        <hr />
                        <p className="product-description">{product.description}</p>

                        <div className="mt-4 mb-3">
                            {product.colors?.map((color, index) => (
                                <button key={index} className="btn btn-outline-secondary color-btn me-2">
                                    {color}
                                </button>
                            ))}
                        </div>

                        <div className="mb-3">
                            {product.availableSizes?.map((size, index) => (
                                <button
                                    key={index}
                                    className={`btn me-2 size-btn ${selectedSize === size ? 'selected-size' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <div className="mb-4 d-flex align-items-center">
                            <button onClick={decreaseQuantity} className="btn btn-sm me-2 qty-icon">-</button>
                            <span className="quantity-display">{quantity}</span>
                            <button onClick={increaseQuantity} className="btn btn-sm ms-2 qty-icon">+</button>
                        </div>

                        <hr />
                        <div className="d-flex">
                            <button className="btn btn-info me-2">
                                <i className="bi bi-bag-fill me-2"></i> Buy Now
                            </button>
                            <button className="btn btn-secondary">
                                <i className="bi bi-cart me-2"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
