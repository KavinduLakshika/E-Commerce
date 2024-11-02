import React, { useState } from 'react';
import './SideBar.css';

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={isSidebarOpen ? 'body-pd' : ''}>
            <div className={`l-navbar ${isSidebarOpen ? 'show' : ''}`} id="nav-bar">
                <div className="nav-sidebar">
                    <header className="header">
                        <div className="header_toggle" onClick={toggleSidebar}>
                            <i className={`bx ${isSidebarOpen ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
                        </div>
                        <div className="header_img">
                            <img src="https://i.imgur.com/hczKIze.jpg" alt="User" />
                        </div>
                    </header>

                    <div>
                        <a href="#" className="nav_logo">
                            <i className="bx bx-layer nav_logo-icon"></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            <a href="#" className="nav_link">
                                <i className="bx bx-grid-alt nav_icon"></i>
                                <span className="nav_name">Dashboard</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className="bx bx-user nav_icon"></i>
                                <span className="nav_name">Users</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className="bx bx-folder nav_icon"></i>
                                <span className="nav_name">Files</span>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="nav_link">
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">SignOut</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
