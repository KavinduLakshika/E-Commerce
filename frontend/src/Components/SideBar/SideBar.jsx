import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ onLogout }) {
    
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    const toggleNavbar = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        // Update activeLink based on the current path
        const currentPath = location.pathname;
        const activeItem = menuItems.find(item => item.path === currentPath);
        if (activeItem) {
            setActiveLink(activeItem.name);
        }
    }, [location]);

    useEffect(() => {
        const bodyElement = document.getElementById('body-pd');
        const headerElement = document.getElementById('header');
        if (isNavVisible) {
            bodyElement.classList.add('body-pd');
            headerElement.classList.add('body-pd');
        } else {
            bodyElement.classList.remove('body-pd');
            headerElement.classList.remove('body-pd');
        }
    }, [isNavVisible]);

    const menuItems = [
        { name: 'Dashboard', icon: 'bx-grid-alt', path: '/dashboard' },
        { name: 'Add Product', icon: 'bxs-message-square-add', path: '/add' },
        { name: 'Product List', icon: 'bx-list-ul', path: '/list' },
        { name: 'Order List', icon: 'bx-list-check', path: '/order_list' }
    ];

    const logout = () => {
        onLogout();
    }

    return (
        <>
            <header className="header" id="header">
                <div className="header_toggle" onClick={toggleNavbar}>
                    <i className={`bx ${isNavVisible ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
                </div>
                <div className="header_img">
                    <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile" />
                </div>
            </header>

            <div className={`l-navbar ${isNavVisible ? 'show' : ''}`} id="nav-bar">
                <nav className="nav">
                    <div>
                        <Link to="/dashboard" className="nav_logo">
                            <i className='bx bxs-dog nav_icon'></i>
                            <span className="nav_logo-name">මගේ සමාගම</span>
                        </Link>

                        {menuItems.map((item) => (
                            <div className="nav_list" key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`nav_link ${activeLink === item.name ? 'active' : ''}`}
                                    onClick={() => setActiveLink(item.name)}
                                >
                                    <i className={`bx ${item.icon} nav_icon`}></i>
                                    <span className="nav_name">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <a href="" className="nav_link" onClick={logout} >
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
