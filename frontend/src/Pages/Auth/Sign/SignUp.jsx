import { useState } from "react";
import { Eye, EyeSlash, CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import { auth, googleProvider } from "../../../Components/config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./SignUp.css";
import prod from '../../../assets/prod 2.webp';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [obscurePassword, setObscurePassword] = useState(true);
    const [obscureConfirmPassword, setObscureConfirmPassword] = useState(true);
    const [error, setError] = useState("");

    const passwordType = obscurePassword ? "password" : "text";
    const confirmPasswordType = obscureConfirmPassword ? "password" : "text";

    const handleObscurePasswordToggle = () => setObscurePassword(!obscurePassword);
    const handleObscureConfirmPasswordToggle = () => setObscureConfirmPassword(!obscureConfirmPassword);

    const passwordValidity = {
        length: password.length >= 8,
        capital: /[A-Z]/.test(password),
        simple: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
    };

    const passwordsMatch = password && confirmPassword && password === confirmPassword;

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        if (!passwordsMatch) {
            setError("Passwords do not match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Signed up with Google successfully!");
        } catch (err) {
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
                            className="img-fluid rounded-start signUp-image"
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center p-5 sign-contain">
                        <h3 className="text-center">Create Account</h3>

                        {error && <small className="text-danger">{error}</small>}
                        <form onSubmit={handleSignUp}>
                            <div className="frm mb-3">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    <label>Email</label>
                                </div>

                                <div className="position-relative form-floating mb-3">
                                    <input
                                        type={passwordType}
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label>Password</label>
                                    <button
                                        className="password-toggle-icon"
                                        type="button"
                                        onClick={handleObscurePasswordToggle}
                                    >
                                        {obscurePassword ? <Eye /> : <EyeSlash />}
                                    </button>
                                </div>

                                <div className="mt-2">
                                    <p className={passwordValidity.length ? "text-success" : "text-danger"}>
                                        {passwordValidity.length ? <CheckCircleFill /> : <XCircleFill />} At least 8 characters
                                    </p>
                                    <p className={passwordValidity.capital ? "text-success" : "text-danger"}>
                                        {passwordValidity.capital ? <CheckCircleFill /> : <XCircleFill />} At least 1 capital letter
                                    </p>
                                    <p className={passwordValidity.simple ? "text-success" : "text-danger"}>
                                        {passwordValidity.simple ? <CheckCircleFill /> : <XCircleFill />} At least 1 simple letter
                                    </p>
                                    <p className={passwordValidity.number ? "text-success" : "text-danger"}>
                                        {passwordValidity.number ? <CheckCircleFill /> : <XCircleFill />} At least 1 number
                                    </p>
                                </div>

                                <div className="position-relative form-floating mb-3">
                                    <input
                                        type={confirmPasswordType}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <label>Confirm Password</label>
                                    <button
                                        className="password-toggle-icon"
                                        type="button"
                                        onClick={handleObscureConfirmPasswordToggle}
                                    >
                                        {obscureConfirmPassword ? <Eye /> : <EyeSlash />}
                                    </button>
                                </div>
                                {!passwordsMatch && confirmPassword && (
                                    <small className="text-danger">Passwords do not match</small>
                                )}
                            </div>

                            <div className="mb-3 sec-sing-btn ">
                                <button
                                    className="btn my-3 signIn-btn"
                                    type="submit"
                                    disabled={
                                        !passwordValidity.length ||
                                        !passwordValidity.capital ||
                                        !passwordValidity.simple ||
                                        !passwordValidity.number ||
                                        !passwordsMatch
                                    }
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <div className="row mt-1 or">
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
                        <div className="google-sign">
                            <button className="btn my-3 sign-btn" onClick={handleGoogleSignUp}>
                                <i className="fab fa-google me-2"></i>
                                <span>Sign Up With Google</span>
                            </button>

                            <div className="text-center">
                                <a href="/login" className="text-decoration-none">
                                    Already a Member? <span className="singIn">Sign In</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
