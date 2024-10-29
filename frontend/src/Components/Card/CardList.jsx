// src/CardList.js
/* eslint-disable react/prop-types */
import './Card.css';
import { FaHeart, FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const CardList = ({
    data,
    onAddToCart,
    onAddToWishlist,
    itemsPerPage = 20,
    showIcons = true,
    showProdDetails = true,
    showBtn = true,
    showName = true,
    showPrice = true,
    showSizeOptions = true,
}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [wishlistAdded, setWishlistAdded] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const handleAddToCart = (item) => {
        if (!showSizeOptions || selectedSizes[item.prodName]) {
            onAddToCart({ ...item, selectedSize: selectedSizes[item.prodName] });
        } else {
            alert("Please select a size before adding to cart.");
        }
    };

    const handleAddToWishlist = (item) => {
        setWishlistAdded({ ...wishlistAdded, [item.prodName]: true });
        onAddToWishlist(item);
    };

    const handleSizeSelect = (item, size) => {
        setSelectedSizes({ ...selectedSizes, [item.prodName]: size });
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container-fluid p-4">
            <div className="row">
                {currentItems.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="product-card">
                            <div className="product-card-img-container">
                                <img src={item.image} className="product-card-img" alt={item.prodName} />

                                {showIcons && (
                                    <div className="icon-container">
                                        <div className="icon-wrapper" onClick={() => handleAddToWishlist(item)}>
                                            <FaHeart className={`icon ${wishlistAdded[item.prodName] ? 'added' : ''}`} />
                                            <div className="icon-label">
                                                {wishlistAdded[item.prodName] ? 'Added to Wishlist' : 'Add to Wishlist'}
                                            </div>
                                        </div>
                                        <div className="icon-wrapper">
                                            <FaEye className="icon" />
                                            <div className="icon-label">
                                                View Details
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {showProdDetails && (
                                <div className="product-details">
                                    {showBtn && (
                                        <button className="quick-add-button" onClick={() => handleAddToCart(item)}>
                                            {item.btnName} {/* Use item.btnName for button text */}
                                        </button>
                                    )}
                                    {showName && <div className="product-name">{item.prodName}</div>}
                                    {showPrice && <div className="product-price">Rs {item.prodPrice}</div>}
                                </div>
                            )}

                            {showSizeOptions && (
                                <div className="size-buttons">
                                    {item.availableSizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`size-button ${selectedSizes[item.prodName] === size ? 'selected' : ''}`}
                                            onClick={() => handleSizeSelect(item, size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="row mt-2 justify-content-center">
                    <div className="col-md-12">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardList;
