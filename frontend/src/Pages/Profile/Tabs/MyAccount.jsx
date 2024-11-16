import { useState, useEffect } from "react";
import './Tab.css';
import config from "../../../config";

function MyAccount() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        cusEmail: "",
        cusName: "",
        cusGender: "",
        cusPhone1: "",
        cusPhone2: "",
        cusCountry: "",
        cusDob: "",
    });

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedName = localStorage.getItem("name");

        if (savedEmail) {
            setFormData((prev) => ({ ...prev, cusEmail: savedEmail }));
        }

        if (savedName) {
            setFormData((prev) => ({ ...prev, cusName: savedName }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "cusName") {
            localStorage.setItem("name", value);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        try {
            const response = await fetch(`${config.BASE_URL}/updateProfile`, {
                method: "POST",
                body: form,
            });

            const data = await response.json();
            if (response.ok) {
                setAlertType("alert-success");
                setMessage("Profile updated successfully!");
                setShowAlert(true);
            } else {
                console.error(data);
                setAlertType("alert-danger");
                setMessage("An error occurred while updating the profile.");
                setShowAlert(true);
            }
        } catch (error) {
            console.error(error);
            setAlertType("alert-danger");
            setMessage("An error occurred while updating the profile.");
            setShowAlert(true);
        }
    };


    return (
        <form className="row acc" onSubmit={handleSubmit}>
            <h3 className="fw-bold">My Account</h3>
            {showAlert && (
                <div className={`alert ${alertType} mt-2`} role="alert">
                    {message}
                </div>
            )}
            <div className="col-md-6 mt-2 mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="cusName"
                    value={formData.cusName}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-6 mt-2 mb-3">
                <label className="form-label">Date Of Birth</label>
                <input
                    type="date"
                    className="form-control"
                    name="cusDob"
                    value={formData.cusDob}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>
                <select
                    className="form-select"
                    name="cusCountry"
                    value={formData.cusCountry}
                    onChange={handleChange}
                >
                    <option value="LK">LK</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                </select>
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                    className="form-select"
                    name="cusGender"
                    value={formData.cusGender}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="cusPhone1"
                    value={formData.cusPhone1}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Secondary Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Secondary Phone Number"
                    name="cusPhone2"
                    value={formData.cusPhone2}
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="cusEmail"
                    value={formData.cusEmail}
                    readOnly
                />
            </div>

            <div className="col-12">
                <button type="submit" className="btn save-btn">
                    Save
                </button>
            </div>
        </form>
    );
}

export default MyAccount;
