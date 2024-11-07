import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, CheckCircleFill, XCircleFill } from "react-bootstrap-icons";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [obscurePassword, setObscurePassword] = useState(true);
    const [obscureConfirmPassword, setObscureConfirmPassword] = useState(true);

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

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">Reset Password</h3>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <Link to="/login">
                                <button type="button" className="btn btn-warning w-100">Go to Login</button>
                            </Link>
                        </div>
                    </div>

                    <form>
                        {/* New Password Field */}
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label htmlFor="password">New Password:</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type={passwordType}
                                        name="password"
                                        id="password"
                                        placeholder="Enter new password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className="input-group-text cursor-pointer" type="button" onClick={handleObscurePasswordToggle}>
                                        {obscurePassword ? <Eye /> : <EyeSlash />}
                                    </button>
                                </div>

                                {/* Password validation hints */}
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
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label htmlFor="confirmPassword">Confirm New Password:</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type={confirmPasswordType}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Confirm entered password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button className="input-group-text cursor-pointer" type="button" onClick={handleObscureConfirmPasswordToggle}>
                                        {obscureConfirmPassword ? <Eye /> : <EyeSlash />}
                                    </button>
                                </div>
                                {!passwordsMatch && confirmPassword && (
                                    <small className="text-danger">Passwords do not match</small>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={
                                        !passwordValidity.length ||
                                        !passwordValidity.capital ||
                                        !passwordValidity.simple ||
                                        !passwordValidity.number ||
                                        !passwordsMatch
                                    }
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
