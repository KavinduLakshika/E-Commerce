import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { auth, googleProvider } from "../../../Components/config/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Login.css";
import prod from '../../../assets/prod.webp';

function Login() {
    const [obscurePassword, setObscurePassword] = useState(true);
    const passwordType = obscurePassword ? "password" : "text";
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleObscurePasswordToggle = () => setObscurePassword(!obscurePassword);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const validate = () => {
        let tempErrors = { email: "", password: "" };
        let isValid = true;

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = "Password is required";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (validate()) {
            try {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                alert("Logged in successfully!");
            } catch (err) {
                alert("Failed to log in. Please check your credentials.");
                setError(err.message);
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Signed in with Google successfully!");
        } catch (err) {
            alert("Google sign-in failed. Try again.");
            setError(err.message);
        }
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg login-card">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={prod}
                            alt="Login visual"
                            className="img-fluid rounded-start signIn-image"
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center p-5">
                        <h3 className="text-center">Log In</h3>

                        <div className="frm mb-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                <label htmlFor="email">Email</label>
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>

                            <div className="form-floating">
                                <input
                                    type={passwordType}
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                                <label htmlFor="password">Password</label>
                                <button className="password-toggle-icon" type="button" onClick={handleObscurePasswordToggle}>
                                    {obscurePassword ? <Eye /> : <EyeSlash />}
                                </button>
                                {errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                        </div>

                        {error && <div className="text-danger text-center mb-3">{error}</div>}

                        <div className="row mt-2">
                            <div className="col-md-12">
                                <Link to="/reqOtp">
                                    <p>
                                        <strong>Forgot Password?</strong>
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="mb-3">
                            <button className="btn my-3 signIn-btn" onClick={handleLogin}>
                                Sign In
                            </button>
                        </div>

                        <div className="row mt-1">
                            <div className="col-md-5">
                                <hr />
                            </div>
                            <div className="col-md-2 mt-1">
                                <p className="text-center">OR</p>
                            </div>
                            <div className="col-md-5">
                                <hr />
                            </div>
                        </div>

                        <button className="btn my-3 sign-btn" onClick={handleGoogleSignIn}>
                            <i className="fab fa-google me-2"></i> Sign In With Google
                        </button>

                        <div className="text-center">
                            <Link to="/signUp" className="text-decoration-none">
                                Don’t have an account yet? <span className="signUp">Sign Up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;