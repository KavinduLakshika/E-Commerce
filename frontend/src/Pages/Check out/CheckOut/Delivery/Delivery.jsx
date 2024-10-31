import { useState } from "react";
import OrderSummary from "./OrderSummary";
import './Delivery.css';

// eslint-disable-next-line react/prop-types
function Delivery({ onProceedToPayment }) {
    const [deliveryMethod, setDeliveryMethod] = useState("Ship");

    const handleSubmit = (e) => {
        e.preventDefault();
        onProceedToPayment();
    };


  return (
    <div className="container my-5 checkout-container">
      <div className="row">
        <div className="col-md-8 ">
          <form onSubmit={handleSubmit}>
            <div className="checkout-step">
              <div className="p-4 border delivery-methods d-flex gap-3 ">
                <button className={`btn ${deliveryMethod === "Ship" ? "btn-primary" : ""}`} onClick={() => setDeliveryMethod("Ship")}>
                  Ship
                </button>
                <button className={`btn ${deliveryMethod === "PickUp" ? "btn-primary" : ""}`} onClick={() => setDeliveryMethod("PickUp")}>
                  Pick Up
                </button>
              </div>

              <div className="p-1"> </div>

              {deliveryMethod === "Ship" && (
                <div className="delivery-form mt-4">
                  <div className="delivery-info p-4 border">
                    <h5>Delivery Address</h5>
                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">First Name</label>
                          <input type="name" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col">
                          <label className="form-label">Last Name</label>
                          <input type="name" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">Country</label>
                          <select className="form-control">
                            <option>LK</option>
                          </select>
                        </div>
                        <div className="col">
                          <label className="form-label">Phone Number</label>
                          <input type="name" className="form-control" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">Address Line 1</label>
                          <input type="name" className="form-control" placeholder="Address Line 1" />
                        </div>
                        <div className="col">
                          <label className="form-label">Address Line 2</label>
                          <input type="name" className="form-control" placeholder="Address Line 2" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">City</label>
                          <input type="name" className="form-control" placeholder="City" />
                        </div>
                        <div className="col">
                          <label className="form-label">Postal Code</label>
                          <input type="name" className="form-control" placeholder="Postal Code" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-1"> </div>

                  <div className="contact-info p-4 border">
                    <h5>Contact Information</h5>
                    <div className="row">
                      <div className="col">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="col">
                        <input type="tel" className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>

                  <div className="p-1"> </div>

                  <div className="delivery-options p-4 border">
                    <h5>Delivery Options</h5>
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>

              )}

              {deliveryMethod === "PickUp" && (
                <div className="pickup-form mt-4">
                  <div className="p-4 border pickup-info">
                    <h5>Pick Up Location</h5>
                    <select className="form-control my-2">
                      <option>Select Pick Up Location</option>
                      <option>Location 1</option>
                      <option>Location 2</option>
                      <option>Location 3</option>
                    </select>
                  </div>

                  <div className="p-1"></div>

                  <div className="delivery-info p-4 border">
                    <h5>Billing Address</h5>
                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">First Name</label>
                          <input type="name" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col">
                          <label className="form-label">Last Name</label>
                          <input type="name" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">Country</label>
                          <select className="form-control">
                            <option>LK</option>
                          </select>
                        </div>
                        <div className="col">
                          <label className="form-label">Phone Number</label>
                          <input type="name" className="form-control" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">Address Line 1</label>
                          <input type="name" className="form-control" placeholder="Address Line 1" />
                        </div>
                        <div className="col">
                          <label className="form-label">Address Line 2</label>
                          <input type="name" className="form-control" placeholder="Address Line 2" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label">City</label>
                          <input type="name" className="form-control" placeholder="City" />
                        </div>
                        <div className="col">
                          <label className="form-label">Postal Code</label>
                          <input type="name" className="form-control" placeholder="Postal Code" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-1"> </div>

                  <div className="contact-info p-4 border">
                    <h5>Contact Information</h5>
                    <div className="row">
                      <div className="col">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="col">
                        <input type="tel" className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>

                  <div className="p-1"> </div>

                  <div className="delivery-options p-4 border">
                    <h5>Delivery Options</h5>
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>

                </div>
              )}

              <div className="p-4">
                <button className="btn w-100 mt-4 proceed">Proceed To Payment</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 orderSummary">
          <OrderSummary />
        </div>
      </div>
    </div >
  );
}

export default Delivery;
