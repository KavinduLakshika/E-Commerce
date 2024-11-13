import { useState, useEffect } from 'react';
import './NavBar.css';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SlideInCart from '../../Pages/Cart/SlideInCart/SlideInCart';

const NavBar = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);

        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleCloseCart = () => {
        setIsCartVisible(false);
    };

    const handleProfileClick = (e) => {
        e.preventDefault();
        if (isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

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
                        <div className="d-flex">
                            <a href="#" className='d-flex' onClick={handleProfileClick}>
                                <i className="bi bi-person" style={{ color: "white", fontSize: "25px" }} ></i>
                                <span className='my-2' style={{ color: "white", paddingLeft: "10px" }}>
                                    {isLoggedIn ? "Profile" : "Login"}
                                </span>
                            </a>
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

            {isCartVisible && <div className="blur-overlay" onClick={handleCloseCart}></div>}

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
