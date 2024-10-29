import './Card.css';
import { FaHeart, FaEye } from 'react-icons/fa';

const Card = ({ image, prodName, prodPrice }) => {
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
                        <div className="icon-wrapper">
                            <FaHeart className="icon" />
                            <div className="icon-label">
                                Add to Wishlist <FaHeart />
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
                    <button className="quick-add-button">
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
