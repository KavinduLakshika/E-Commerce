import { useLocation } from 'react-router-dom';
import './OrderSummary.css';

function OrderSummary() {
    const location = useLocation();
    const { orderData } = location.state || {};

    if (!orderData || orderData.length === 0) return <div>No order data available</div>

    
    const calculateSubtotal = () =>
        orderData.reduce((acc, item) => acc + item.prodPrice * item.quantity, 0);

    const subtotal = calculateSubtotal();
    const shippingCost = 380;
    const total = subtotal + shippingCost;

    return (
        <div className="order-summary p-4 mt-2 h-100">
            <h4>Order Summary</h4>
            {orderData.map((item, index) => (
                <div key={index} className="order-item d-flex align-items-center mb-4 mt-4">
                    <img
                        src={item.images[0]}
                        alt="Product"
                        className="product-image"
                    />
                    <div className="order-details">
                        <h6 className="product-title">{item.prodName}</h6>
                        <p className="product-quantity mt-1">Quantity: {item.quantity}</p>
                        <p className="product-size">Size: {item.selectedSize}</p>
                    </div>
                    <span className="prod-price ml-auto">
                        LKR {item.prodPrice * item.quantity}
                    </span>
                </div>
            ))}

            <div className="discount-section mb-3">
                <input
                    type="text"
                    placeholder="Discount code or gift card"
                    className="discount-input"
                />
                <button className="apply-button">Apply</button>
            </div>

            <div className="summary-item d-flex justify-content-between">
                <span>Subtotal</span>
                <span>LKR {subtotal}</span>
            </div>
            <div className="summary-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>LKR {shippingCost}</span>
            </div>

            <hr />

            <div className="summary-total d-flex justify-content-between">
                <strong>Total</strong>
                <strong>LKR {total}</strong>
            </div>
        </div>
    );
}

export default OrderSummary;
