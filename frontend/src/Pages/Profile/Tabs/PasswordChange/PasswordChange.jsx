import { useState } from "react";
import { Eye, EyeSlash, CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import './PasswordChange.css';
import config from "../../../../config";

function PasswordChange() {
  const [obscurePassword, setObscurePassword] = useState(true);
  const [obscureConfirmPassword, setObscureConfirmPassword] = useState(true);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const { oldPassword, password, confirmPassword } = formData;
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

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!oldPassword) {
      tempErrors.oldPassword = "Old password is required";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "New password is required";
      isValid = false;
    } else {
      if (!passwordValidity.length) {
        tempErrors.password = "Password must be at least 8 characters";
        isValid = false;
      }
      if (!passwordValidity.capital) {
        tempErrors.password = "Password must contain at least 1 capital letter";
        isValid = false;
      }
      if (!passwordValidity.simple) {
        tempErrors.password = "Password must contain at least 1 lowercase letter";
        isValid = false;
      }
      if (!passwordValidity.number) {
        tempErrors.password = "Password must contain at least 1 number";
        isValid = false;
      }
    }

    if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const email = localStorage.getItem('email');
      if (!email) {
        setAlertType("alert-danger");
        setMessage("No email found in localStorage. Please log in.");
        setShowAlert(true);
        return;
      }

      const payload = {
        oldPassword: oldPassword,
        newPassword: password,
        cusEmail: email,
      };

      try {
        const response = await fetch(`${config.BASE_URL}/changePassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setAlertType("alert-success");
          setMessage("Password updated successfully!");
          setShowAlert(true);
          setFormData({
            oldPassword: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          const data = await response.json();
          setAlertType("alert-danger");
          setMessage(data.message || "Error updating password");
          setShowAlert(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setAlertType("alert-danger");
        setMessage("Something went wrong. Please try again.");
        setShowAlert(true);
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="row acc" style={{ maxWidth: "500px", width: "100%" }} onSubmit={handleSubmit}>
        <h3 className="fw-bold text-center mb-4">Password Change</h3>

        {showAlert && (
          <div className={`alert ${alertType} mt-2`} role="alert">
            {message}
          </div>
        )}

        <div className="col-12 mb-3">
          <label className="form-label">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            className={`form-control ${errors.oldPassword ? "is-invalid" : ""}`}
            value={oldPassword}
            onChange={handleChange}
            placeholder="Enter Old Password"
          />
          {errors.oldPassword && <div className="invalid-feedback">{errors.oldPassword}</div>}
        </div>

        <div className="col-12 mb-3 position-relative">
          <label className="form-label">New Password</label>
          <input
            type={passwordType}
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={password}
            onChange={handleChange}
            placeholder="Enter New Password"
          />
          <button
            className="change-password-toggle-icon"
            type="button"
            onClick={handleObscurePasswordToggle}
          >
            {obscurePassword ? <Eye /> : <EyeSlash />}
          </button>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="mt-2">
          <p className={passwordValidity.length ? "text-success" : "text-danger"}>
            {passwordValidity.length ? <CheckCircleFill /> : <XCircleFill />} At least 8 characters
          </p>
          <p className={passwordValidity.capital ? "text-success" : "text-danger"}>
            {passwordValidity.capital ? <CheckCircleFill /> : <XCircleFill />} At least 1 capital letter
          </p>
          <p className={passwordValidity.simple ? "text-success" : "text-danger"}>
            {passwordValidity.simple ? <CheckCircleFill /> : <XCircleFill />} At least 1 lowercase letter
          </p>
          <p className={passwordValidity.number ? "text-success" : "text-danger"}>
            {passwordValidity.number ? <CheckCircleFill /> : <XCircleFill />} At least 1 number
          </p>
        </div>

        <div className="col-12 mb-3 position-relative">
          <label className="form-label">Confirm Password</label>
          <input
            type={confirmPasswordType}
            id="confirmPassword"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            value={confirmPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
          />
          <button
            className="change-password-toggle-icon"
            type="button"
            onClick={handleObscureConfirmPasswordToggle}
          >
            {obscureConfirmPassword ? <Eye /> : <EyeSlash />}
          </button>
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>

        <div className="col-12 mb-5">
          <button type="submit" className="btn save-btn w-100">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordChange;
