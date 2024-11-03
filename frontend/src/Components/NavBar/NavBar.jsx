import { useState, useEffect } from 'react';
import './NavBar.css';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SlideInCart from '../../Pages/Cart/SlideInCart/SlideInCart';

const NavBar = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    }, []);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleCloseCart = () => {
        setIsCartVisible(false);
    };

    // Function to remove item from cart
    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Function to change item quantity
    const handleQuantityChange = (index, newQuantity) => {
        const updatedCartItems = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <>
            <nav className="navbar position-sticky navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: '#343a40', zIndex: 1030 }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="#" onClick={(e) => { e.preventDefault(); toggleCartVisibility(); }}>
                            <FaShoppingCart size={25} color="white" />
                        </a>
                        <div className="dropdown">
                            <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="/profile" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Avatar" loading="lazy" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="navbarDropdownMenuAvatar">
                                <li><a className="dropdown-item" href="/profile">My profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-brand mx-auto text-center">
                        <Link to="/">
                            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy" />
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars size={25} color="white" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }}><span className="nav-link text-white">Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/men' style={{ textDecoration: 'none' }}><span className="nav-link text-white">Men</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/women' style={{ textDecoration: 'none' }}><span className="nav-link text-white">Women</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* SlideInCart Component */}
            <SlideInCart
                isVisible={isCartVisible}
                onClose={handleCloseCart}
                cartItems={cartItems}
                onRemoveItem={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
            />
        </>
    );
};

export default NavBar;
