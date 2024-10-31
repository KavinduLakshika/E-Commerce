import './OrderSummary.css';

function OrderSummary() {
    return (
        <div className="order-summary p-4 mt-2 h-100">
            <h5>Order Summary</h5>
            <div className="summary-item d-flex justify-content-between">
                <span>Sub Total</span>
                <span>2195 LKR</span>
            </div>
            <div className="summary-item d-flex justify-content-between">
                <span>Discount</span>
                <span>0 LKR</span>
            </div>
            <div className="summary-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>TBC</span>
            </div>
            <hr />
            <div className="summary-total d-flex justify-content-between">
                <strong>Total</strong>
                <strong>2195 LKR</strong>
            </div>
            <p className="mt-3 text-muted">
                * To make any changes to your order please go to the <a href="/cart">Cart</a>.
            </p>
        </div>
    );
}

export default OrderSummary