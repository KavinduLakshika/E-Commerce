import NavBar from '../../Components/NavBar/NavBar';
import OrderSummery from '../Check out/OrderSummary/OrderSummary';
function Cart() {
    return (
        <div>
            <NavBar/>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - 2 items</h5>
                                </div>
                                <div className="card-body">
                                    {/* Single item */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                                                    className="w-100" alt="Blue Jeans Jacket" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>

                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p><strong>Blue denim shirt</strong></p>
                                            <p>Color: blue</p>
                                            <p>Size: M</p>
                                            <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remove item">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            <button type="button" className="btn btn-danger btn-sm mb-2" title="Move to the wish list">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                            {/* Data */}
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                                                <button className="btn btn-primary px-3 me-2"
                                                    onClick={() => { document.getElementById('form1').stepDown(); }}>
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <div className="form-outline">
                                                    <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-control" />
                                                    <label className="form-label" htmlFor="form1">Quantity</label>
                                                </div>

                                                <button className="btn btn-primary px-3 ms-2"
                                                    onClick={() => { document.getElementById('form1').stepUp(); }}>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            {/* Quantity */}

                                            {/* Price */}
                                            <p className="text-start text-md-center">
                                                <strong>$17.99</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>
                                    {/* Single item */}

                                    <hr className="my-4" />

                                    {/* Another Single item */}
                                    {/* (Copy the above structure for additional items as needed) */}

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
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 orderSummary">
                            <OrderSummery />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;
