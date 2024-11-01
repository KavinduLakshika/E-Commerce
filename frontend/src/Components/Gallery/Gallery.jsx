import React from 'react';
import './Gallery.css'; // Import a CSS file to style the overlay

function Gallery() {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="row container">
                <hr />
                <div className="text-center mb-2">
                    <h1>Category</h1>
                </div>

                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://choccowear.com/wp-content/uploads/2024/09/TOPS_2.jpg"
                            className="w-100 shadow-1-strong rounded"
                            alt="Tops"
                        />
                        <div className="overlay">Tops</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Office%20wear%20blouses%20SL.jpg"
                            className="w-100 shadow-1-strong rounded"
                            alt="T-Shirts"
                        />
                        <div className="overlay">T-Shirts</div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Crop-tops-Sri-Lanka.jpg"
                            className="w-100 shadow-1-strong rounded"
                            alt="Crop Tops"
                        />
                        <div className="overlay">Crop Tops</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://choccowear.com/wp-content/uploads/2024/09/Pants_2.jpg"
                            className="w-100 shadow-1-strong rounded"
                            alt="Denims"
                        />
                        <div className="overlay">Denims</div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="image-container mb-4">
                        <img
                            src="https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Floral-dresses-Sri-Lanka.jpg"
                            className="w-100 shadow-1-strong rounded"
                            alt="Skirt"
                        />
                        <div className="overlay">Skirt</div>
                    </div>
                    <div className="image-container mb-4">
                        <img
                            src="https://choccowear.com/wp-content/uploads/2024/09/DRESSES_2.jpg"
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
