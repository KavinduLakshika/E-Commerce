/* eslint-disable react/prop-types */
import './OrderSummary.css';

function OrderSummary({ product, quantity, selectedSize }) {
    if (!product) {
        return <div>No product selected</div>;
    }

    return (
        <div className="order-summary p-4 mt-2 h-100">
            <h4>Order Summary</h4>
            <div className="order-item d-flex align-items-center mb-4 mt-4">
                <img
                    src={product.images?.[0]}
                    alt="Product"
                    className="product-image"
                />
                <div className="order-details">
                    <h6 className="product-title">{product.prodName}</h6>
                    <p className="product-quantity">Quantity {quantity}</p>
                    <p className="product-size">Size {selectedSize}</p>
                </div>
                <span className="prod-price ml-auto">LKR {product.prodPrice}</span>
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
                <span>LKR {product.prodPrice * quantity}</span>
            </div>
            <div className="summary-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>LKR 380.00</span>
            </div>

            <hr />

            <div className="summary-total d-flex justify-content-between">
                <strong>Total</strong>
                <strong>LKR {product.prodPrice * quantity + 380}</strong>
            </div>
        </div>
    );
}

export default OrderSummary;
