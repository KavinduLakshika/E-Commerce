import React from 'react';
import './Gallery.css'; // Import a CSS file to style the overlay

function Gallery() {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="row container">
                <hr />
                <div className="text-center mb-2">
                    <h1>New Arrivals</h1>
                </div>

                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fu22qckea35oqxf7t7veasvgo&w=1920&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="Tops"
                        />
                        <div className="overlay">Tops</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fhikorvr158kvcefl3exqxzcz&w=3840&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="T-Shirts"
                        />
                        <div className="overlay">T-Shirts</div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2For398povxhjk2dov3a3izw7k&w=1920&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="Crop Tops"
                        />
                        <div className="overlay">Crop Tops</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Faut3rz9w4f7se6o7rux6x8u4&w=3840&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="Denims"
                        />
                        <div className="overlay">Denims</div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fj4fupnw38sdeyrimbndsqnf3&w=828&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="Skirt"
                        />
                        <div className="overlay">Skirt</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fi4s6wpa42dfqe6drk0ojdpge&w=1920&q=75"
                            className="w-100 shadow-1-strong rounded"
                            alt="Dresses"
                        />
                        <div className="overlay">Dresses</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
