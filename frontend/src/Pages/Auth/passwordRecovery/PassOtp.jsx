import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";

function PassOtp() {
    const [seconds, setSeconds] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    const [formData, setFormData] = useState({ otp: "" });
    const [errors, setErrors] = useState({ otp: "" });
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let intervalId = null;

        if (isRunning && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setSeconds(30);
            setIsRunning(false);
        }

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning, seconds]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const validate = () => {
        let tempErrors = { otp: "" };
        let isValid = true;

        if (!formData.otp) {
            tempErrors.otp = "OTP is required";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const cusEmail = localStorage.getItem("recoveryEmail");
                const response = await fetch(`${config.BASE_URL}/verify`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cusEmail, otp: formData.otp }),
                });

                const data = await response.json();
                if (response.ok) {
                    setAlertType("alert alert-success");
                    setAlertMessage(data.message);
                    navigate("/resetPassword");
                } else {
                    setAlertType("alert alert-danger");
                    setAlertMessage(data.message);
                }
            } catch (error) {
                setAlertType("alert alert-danger");
                setAlertMessage("An error occurred. Please try again later.");
                console.error("Error during OTP verification:", error);
            }
        }
    };

    const resendOtp = async () => {
        setIsRunning(true);
        setSeconds(30);
        try {
            const cusEmail = localStorage.getItem("recoveryEmail");
            const response = await fetch(`${config.BASE_URL}/resendOtp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cusEmail }),
            });

            const data = await response.json();
            setAlertType(response.ok ? "alert alert-success" : "alert alert-danger");
            setAlertMessage(data.message);
        } catch (error) {
            setAlertType("alert alert-danger");
            setAlertMessage("An error occurred while resending OTP. Please try again later.");
            console.error("Error during OTP resend:", error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-3">
                    <h3 className="text-center">Confirm OTP</h3>
                    <h6 className="text-center">Check your email and enter the OTP we&apos;ve sent you.</h6>

                    {alertMessage && <div className={alertType}>{alertMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="otp"
                                    id="otp"
                                    placeholder="Enter OTP"
                                    value={formData.otp}
                                    onChange={handleChange}
                                />
                                {errors.otp && <span className="text-danger">{errors.otp}</span>}
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </div>
                    </form>
                    <hr />

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button
                                type="button"
                                className="btn btn-outline-primary w-100"
                                disabled={isRunning}
                                onClick={resendOtp}
                            >
                                {isRunning ? `Wait ${seconds} seconds` : "Resend OTP"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassOtp;
