/* eslint-disable react/prop-types */
import './SlideInCart.css';
import { Link, useNavigate } from 'react-router-dom';
import cart_back from '../../../assets/cart.jpg'

function SlideInCart({ isVisible, onClose, cartItems, onRemoveItem, onQuantityChange }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            <div className={`slide-in-cart ${isVisible ? 'visible' : ''}`}>
                <div className="cart-header">
                    <h2>
                        <i className="bi bi-cart-plus mx-3 "></i>
                        Shopping Cart
                    </h2>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className='emt-cart'>
                            <div className="cart-back-img">
                                <img src={cart_back} alt="" />
                            </div>
                            <p>No Cart Items</p>
                            <Link to='/'>
                                <button className='btn bg-body-secondary'>Shop Now</button>
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="row" key={index}>
                                <div className="col-lg-3 mb-4">
                                    <img src={item.images[0]} className="w-100 " alt={item.prodName} />
                                </div>
                                <div className="col-lg-5 mb-4">
                                    <h4><strong>{item.prodName}</strong></h4>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.selectedSize}</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm me-1 mb-2 remove"
                                        onClick={() => onRemoveItem(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="d-flex mb-4 qty">
                                        <button
                                            className="btn btn-primary px-3 me-2"
                                            onClick={() => onQuantityChange(index, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input
                                            min="1"
                                            name="quantity"
                                            value={item.quantity}
                                            onChange={(e) => onQuantityChange(index, Math.max(1, Number(e.target.value)))}
                                            type="number"
                                            className="form-control"
                                        />
                                        <button
                                            className="btn btn-primary px-3 ms-2"
                                            onClick={() => onQuantityChange(index, item.quantity + 1)}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <h5><strong>LKR {item.prodPrice * item.quantity}.00</strong></h5>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default SlideInCart;
