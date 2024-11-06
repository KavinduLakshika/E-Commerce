import { useState } from "react";

function ReqOtp() {
    const [formData, setFormData] = useState({ email: "" });
    const [errors, setErrors] = useState({ email: "" });
    const [processing, setProcessing] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [message, setMessage] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {

            setProcessing(true);
            setShowAlert(false);

            setTimeout(() => {
                setProcessing(false);
                setShowAlert(true);
                setAlertType("alert alert-success"); 
                setMessage("OTP has been sent to your email address.");
            }, 2000);

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
