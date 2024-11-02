import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('Dashboard');

    const toggleNavbar = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

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
        { name: 'Dashboard', icon: 'bx-grid-alt', path: '' },
        { name: 'Users', icon: 'bx-user', path: '' },
        { name: 'Messages', icon: 'bx-message', path: '' },
        { name: 'Bookmark', icon: 'bx-bookmark', path: '' },
        { name: 'Files', icon: 'bx-file', path: '' },
        { name: 'Stats', icon: 'bx-stats', path: '' }
    ];

    return (
        <div className='body' id="body-pd">
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
                        <Link to="/dash" className="nav_logo">
                            <i className='bx bxs-dog nav_icon'></i>
                            <span className="nav_logo-name">මගේ සමාගම</span>
                        </Link>

                        {menuItems.map((item) => (
                            <div className="nav_list" key={item.name}>
                                <Link to={item.path} className={`nav_link ${activeLink === item.name ? 'active' : ''}`} onClick={() => handleLinkClick(item.name)} >
                                    <i className={`bx ${item.icon} nav_icon`}></i>
                                    <span className="nav_name">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <Link to="/logout" className="nav_link">
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">SignOut</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
