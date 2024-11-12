import { useState } from "react";
import config from "../../../config";
import { useNavigate } from "react-router-dom";

function ReqOtp() {
    const [formData, setFormData] = useState({ email: "" });
    const [errors, setErrors] = useState({ email: "" });
    const [processing, setProcessing] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const validate = () => {
        let tempErrors = { email: "" };
        let isValid = true;

        if (!formData.email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            setProcessing(true);
            setShowAlert(false);

            try {
                const response = await fetch(`${config.BASE_URL}/sendRecoveryOTP`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cusEmail: formData.email }),
                });

                const data = await response.json();
                setProcessing(false);

                if (response.ok) {
                    setAlertType("alert alert-success");
                    setMessage(data.message);
                    localStorage.setItem('recoveryEmail', formData.email);
                    navigate("/passOtp"); 
                } else {
                    setAlertType("alert alert-danger");
                    setMessage(data.message);
                }
            } catch (error) {
                setProcessing(false);
                setAlertType("alert alert-danger");
                setMessage("An error occurred. Please try again later.");
                console.error("Error during OTP request:", error);
            } finally {
                setShowAlert(true);
            }

        } else {
            setShowAlert(true);
            setAlertType("alert alert-danger");
            setMessage("Please correct the errors and try again.");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-3">
                    <h3 className="text-center">Reset Password</h3>

                    {showAlert && (
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <div className={alertType}>
                                    {message}
                                </div>
                            </div>
                        </div>
                    )}

                    <h6 className="text-center mt-3">Enter your email address to receive an OTP</h6>

                    <form onSubmit={handleSubmit}>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary w-100">
                                    {processing ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReqOtp;
