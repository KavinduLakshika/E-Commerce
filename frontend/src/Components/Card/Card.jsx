import './Card.css';
import { FaHeart, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const Card = ({ image, prodName, prodPrice, onAddToCart, onAddToWishlist, availableSizes }) => {
    `
    `
    const [wishlistAdded, setWishlistAdded] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (selectedSize) {
            onAddToCart({ image, prodName, prodPrice, selectedSize });
        } else {
            alert("Please select a size before adding to cart.");
        }
    };

    const handleAddToWishlist = () => {
        setWishlistAdded(true);
        onAddToWishlist({ image, prodName, prodPrice });
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='container-fluid mt-3'>
            <div className="product-card">
                <div className="product-card-img-container">
                    <img
                        src={image}
                        className="product-card-img"
                        alt={prodName}
                    />
                    <div className="icon-container">
                        <div className="icon-wrapper" onClick={handleAddToWishlist}>
                            <FaHeart className={`icon ${wishlistAdded ? 'added' : ''}`} />
                            <div className="icon-label">
                                {wishlistAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
                                <FaHeart />
                            </div>
                        </div>
                        <div className="icon-wrapper">
                            <FaEye className="icon" />
                            <div className="icon-label">
                                View Details <FaEye />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <button className="quick-add-button" onClick={handleAddToCart}>
                        QUICK ADD
                    </button>
                    <div className="product-name">{prodName}</div>
                    <div className="product-price">Rs {prodPrice}</div>
                </div>
                <div className="size-buttons">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeSelect(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;
