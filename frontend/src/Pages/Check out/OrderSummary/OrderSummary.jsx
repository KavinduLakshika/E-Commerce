import './OrderSummary.css';

function OrderSummary() {
    
    return (
        <div className="order-summary p-4 mt-2 h-100">
            <h4>Order Summary</h4>
            <div className="order-item d-flex align-items-center mb-4 mt-4">
                <img
                    src=''
                    alt="Product"
                    className="product-image"
                />
                <div className="order-details">
                    <h6 className="product-title">Name</h6>
                    <p className="product-quantity">Quantity</p>
                    <p className="product-size">Size</p>
                </div>
                <span className="prod-price ml-auto">LKR 000 </span>
            </div>

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
                <span>LKR </span>
            </div>
            <div className="summary-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>LKR 380.00</span>
            </div>

            <hr />

            <div className="summary-total d-flex justify-content-between">
                <strong>Total</strong>
                <strong>LKR 000</strong>
            </div>
        </div>
    );
}

export default OrderSummary;
