import React from 'react';
import './NavBar.css'; // Ensure you add your CSS in this file
import { FaBars, FaShoppingCart, FaBell } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary position-sticky top-0" style={{ zIndex: 1030 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy" />
                </a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center ">
                    <a className="text-reset me-3" href="#">
                        <FaShoppingCart size={25} />
                    </a>
                    <div className="dropdown">
                        <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaBell size={25} />
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Some news</a></li>
                            <li><a className="dropdown-item" href="#">Another news</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Avatar" loading="lazy" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li><a className="dropdown-item" href="#">My profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars size={25} />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
