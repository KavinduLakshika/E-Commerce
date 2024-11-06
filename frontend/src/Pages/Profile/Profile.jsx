/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Profile.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import profilePic from "../../assets/prod.webp";
import MyAccount from "./Tabs/MyAccount"
import AddressBook from "./Tabs/AddressBook";
import PasswordChange from "./Tabs/PasswordChange";
import MyOrders from "./Tabs/MyOrders";
import NavBar from "../../Components/NavBar/NavBar";


function Profile({ onLogout }) {

    useEffect(() => {
        localStorage.setItem("profilePic", profilePic);
    }, []);

    const [activeSection, setActiveSection] = useState("account");

    const renderActiveSection = () => {
        switch (activeSection) {
            case "account":
                return <MyAccount />;
            case "passwordChange":
                return <PasswordChange />;
            case "addressBook":
                return <AddressBook />;
            case "orders":
                return <MyOrders />;
            default:
                return <MyAccount />;
        }
    };

    const logout = () => {
        onLogout();
    }

    return (
        <div>
            <NavBar />
            <div className="container my-5">
                <a href="/" className="back-link">Back to Shopping</a>
                <h1 className="fw-bold my-4">Hello</h1>

                <div className="row">
                    <div className="col-md-3">
                        <div className="card p-3 shadow-sm profile-card">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="profile-pic mx-auto d-block rounded-circle"
                            />
                            <h5 className="text-center mt-3 fw-bold">Profile</h5>

                            <ul className="list-unstyled mt-4">
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "account" ? "active" : ""}`}
                                        onClick={() => setActiveSection("account")}
                                    >
                                        <i className="bi bi-person"></i> My Account
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "passwordChange" ? "active" : ""}`}
                                        onClick={() => setActiveSection("passwordChange")}
                                    >
                                        <i className="bi bi-eye-slash me-2"></i>Password Change
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "addressBook" ? "active" : ""}`}
                                        onClick={() => setActiveSection("addressBook")}
                                    >
                                        <i className="bi bi-truck me-2"></i>Address Book
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "orders" ? "active" : ""}`}
                                        onClick={() => setActiveSection("orders")}
                                    >
                                        <i className="bi bi-bag me-2"></i>My Orders
                                    </a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#" className="logout-link text-danger text-decoration-none" onClick={logout}>
                                <i className="bi bi-box-arrow-right me-2"></i>Log Out
                            </a>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card p-4 shadow-sm">
                            {renderActiveSection()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile