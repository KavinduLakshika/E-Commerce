import { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

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
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {cartItems.map((item, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img
                                                        src={item.images[0]}
                                                        className="w-100"
                                                        alt={item.prodName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p><strong>{item.prodName}</strong></p>
                                                <p>Color: {item.color}</p>
                                                <p>Size: {item.selectedSize}</p>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm me-1 mb-2"
                                                    title="Remove item"
                                                    onClick={() => handleRemoveItem(index)}
                                                >
                                                    <i className="fas fa-trash"></i> Remove
                                                </button>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </button>

                                                    <div className="form-outline">
                                                        <input
                                                            min="1"
                                                            name="quantity"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(index, Math.max(1, Number(e.target.value)))}
                                                            type="number"
                                                            className="form-control"
                                                        />
                                                    </div>

                                                    <button
                                                        className="btn btn-primary px-3 ms-2"
                                                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                                <p className="text-start text-md-center">
                                                    <strong>LKR {item.prodPrice * item.quantity}</strong>
                                                </p>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Expected shipping delivery</strong></p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
