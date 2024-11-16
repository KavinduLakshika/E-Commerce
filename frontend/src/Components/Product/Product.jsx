import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
import NavBar from '../NavBar/NavBar';
import SlideInCart from '../../Pages/Cart/SlideInCart/SlideInCart';

const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state || {};

    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const handleCloseCart = () => setIsCartVisible(false);

    useEffect(() => {
        setSelectedImage(product.images[0] || '');
    }, [product]);

    if (!product) return <div>No product selected</div>;

    const increaseQuantity = () => setQuantity(prevQty => (prevQty < product.maxQuantity ? prevQty + 1 : prevQty));
    const decreaseQuantity = () => setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));

    const handleBuyNow = () => {
        const orderData = [{ ...product, quantity, selectedSize }];
        navigate('/checkout', { state: { orderData } });

        const isLoggedIn = localStorage.getItem('token');

        if (isLoggedIn) {
            navigate('/checkout', { state: { orderData } });
        } else {
            alert('Please log in to proceed to checkout.');
            navigate('/login');
        }
    };

    const handleAddToCart = () => {
        const newCartItem = { ...product, quantity, selectedSize };
        const updatedCart = [...cartItems, newCartItem];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setIsCartVisible(true);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

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
                            <button className="btn color-btn me-2" style={{ backgroundColor: product.color, color: product.color.toLowerCase() === 'white' ? 'black' : 'white' }}>
                                {product.color}
                            </button>
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
                            <button className="btn btn-info me-2" onClick={handleBuyNow}>
                                <i className="bi bi-bag-fill me-2"></i> Buy Now
                            </button>
                            <button className="btn btn-secondary" onClick={handleAddToCart}>
                                <i className="bi bi-cart me-2"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isCartVisible && <div className="blur-overlay" onClick={handleCloseCart}></div>}

            {/* SlideInCart component */}
            <SlideInCart
                isVisible={isCartVisible}
                onClose={handleCloseCart}
                cartItems={cartItems}
                onRemoveItem={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
            />
        </div>
    );
};

export default Product;
