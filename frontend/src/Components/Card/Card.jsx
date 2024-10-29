import './Card.css';
import { FaHeart, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const Card = ({ image, prodName, prodPrice, onAddToCart, onAddToWishlist }) => {
    const [wishlistAdded, setWishlistAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart({ image, prodName, prodPrice });
    };

    const handleAddToWishlist = () => {
        setWishlistAdded(true);
        onAddToWishlist({ image, prodName, prodPrice });
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
            </div>
        </div>
    )
}

export default Card;
