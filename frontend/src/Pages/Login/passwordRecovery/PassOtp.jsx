import { useState, useEffect } from "react";

function PassOtp() {
    const [seconds, setSeconds] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    const [formData, setFormData] = useState({ otp: "" });
    const [errors, setErrors] = useState({ otp: "" });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully with OTP:", formData.otp);
        }
    };

    const resendOtp = () => {
        setIsRunning(true);
        setSeconds(30);
        console.log("OTP resent");
    };

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-3">
                    <h3 className="text-center">Confirm OTP</h3>
                    <h6 className="text-center">Check your email and enter the OTP we&apos;ve sent you.</h6>

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