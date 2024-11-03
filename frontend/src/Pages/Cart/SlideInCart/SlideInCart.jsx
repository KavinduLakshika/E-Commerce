/* eslint-disable react/prop-types */
import './SlideInCart.css';
import { Link } from 'react-router-dom';

function SlideInCart({ isVisible, onClose, cartItems, onRemoveItem, onQuantityChange }) {
    return (
        <>
            <div className={`slide-in-cart ${isVisible ? 'visible' : ''}`}>
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className='emt-cart'>
                            <p>No Cart Items</p>
                            <Link to='/'>
                                <button className='btn bg-body-secondary'>Shop Now</button>
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="row" key={index}>
                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <img src={item.images[0]} className="w-100" alt={item.prodName} />
                                </div>
                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <p><strong>{item.prodName}</strong></p>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.selectedSize}</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm me-1 mb-2"
                                        onClick={() => onRemoveItem(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    <div className="d-flex mb-4">
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
                                    <p><strong>LKR {item.prodPrice * item.quantity}</strong></p>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    );
}

export default SlideInCart;
