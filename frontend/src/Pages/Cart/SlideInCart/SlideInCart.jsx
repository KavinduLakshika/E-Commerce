/* eslint-disable react/prop-types */
import './SlideInCart.css';

function SlideInCart({ isVisible, onClose, cartItems }) {
    return (
        <div className={`slide-in-cart ${isVisible ? 'visible' : ''}`}>
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <button onClick={onClose} className="close-btn">×</button>
            </div>
            <div className="cart-content">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>Color: {item.color}</p>
                                <p>Size: {item.size}</p>
                                <p>Price: LKR {item.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-footer">
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    )
}

export default SlideInCart
