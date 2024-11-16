/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Profile.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyAccount from "./Tabs/MyAccount";
import AddressBook from "./Tabs/AddressBook";
import PasswordChange from "./Tabs/PasswordChange/PasswordChange";
import MyOrders from "./Tabs/MyOrders";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import config from "../../config";

function Profile({ onLogout }) {
    const [activeSection, setActiveSection] = useState("account");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        cusImg: ''
    });

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedImage = localStorage.getItem('cusImage');

        setUser({
            name: storedName || 'User',
            cusImg: storedImage
        });
    }, []);

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

    const handleProfilePicChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("cusImg", file);
            formData.append("cusEmail", localStorage.getItem("email"));

            try {
                const response = await fetch(`${config.BASE_URL}/updateProfilePicture`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    const newProfilePic = data.cusImg;

                    // Update localStorage and state
                    localStorage.setItem("cusImage", newProfilePic);
                    setUser((prev) => ({ ...prev, cusImg: newProfilePic }));

                    alert("Profile picture updated successfully!");
                } else {
                    console.error("Failed to update profile picture");
                    alert("Failed to update profile picture. Please try again.");
                }
            } catch (error) {
                console.error("Error uploading profile picture:", error);
                alert("An error occurred while uploading. Please try again later.");
            }
        }
    };

    const logout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <div>
            <NavBar />
            <div className="container my-5">
                <a href="/" className="back-link">Back to Shopping</a>
                <h1 className="fw-bold my-4">Hello {user.name}</h1>

                <div className="row">
                    <div className="col-md-3">
                        <div className="card p-3 shadow-sm profile-card position-relative">
                            <div className="profile-pic-wrapper position-relative">
                                <img
                                    src={user.cusImg}
                                    alt="Profile"
                                    className="profile-pic mx-auto d-block rounded-circle"
                                />
                                <label htmlFor="profilePicInput" className="pen-icon">
                                    <i className="bi bi-pencil-square"></i>
                                </label>
                                <input
                                    type="file"
                                    id="profilePicInput"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleProfilePicChange}
                                />
                            </div>
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
                                        <i className="bi bi-eye-slash me-2"></i> Password Change
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "addressBook" ? "active" : ""}`}
                                        onClick={() => setActiveSection("addressBook")}
                                    >
                                        <i className="bi bi-truck me-2"></i> Address Book
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a
                                        href="#"
                                        className={`profile-link ${activeSection === "orders" ? "active" : ""}`}
                                        onClick={() => setActiveSection("orders")}
                                    >
                                        <i className="bi bi-bag me-2"></i> My Orders
                                    </a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#" className="logout-link text-danger text-decoration-none" onClick={logout}>
                                <i className="bi bi-box-arrow-right me-2"></i> Log Out
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
    );
}

export default Profile;
