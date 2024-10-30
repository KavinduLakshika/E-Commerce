import React from 'react'
import { BsStars } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import './Services.css';


function Services() {
    return (
        <div className='container-fluid mt-5 my-5'>
             
        <div className='mt-5 my-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card d-flex flex-column align-items-center justify-content-center p-3 cardbg h-100 rounded">
                        <div className="icon mb-2">
                            <BsStars size={30} />
                        </div>
                        <div className="text-center">
                            <h5 className="font-semibold mb-2">Exclusive Collection</h5>
                            <p className="text-sm">We cater to the latest trends</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card d-flex flex-column align-items-center justify-content-center p-3 cardbg h-100 rounded">
                        <div className="icon mb-2">
                            <RiSecurePaymentFill size={30} />
                        </div>
                        <div className="text-center">
                            <h5 className="font-semibold mb-2">Secure Payments</h5>
                            <p className="text-sm">We provide instant secure checkouts</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card d-flex flex-column align-items-center justify-content-center p-3 cardbg h-100 rounded">
                        <div className="icon mb-2">
                            <TbTruckDelivery size={30} />
                        </div>
                        <div className="text-center">
                            <h5 className="font-semibold mb-2">We Ship Islandwide</h5>
                            <p className="text-sm">Free Shipping Above LKR 10000</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* <div class="col">
                    <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp" class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp" class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Services