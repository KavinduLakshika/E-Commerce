function PasswordChange() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="row acc" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="fw-bold text-center mb-4">Password Change</h3>

        <div className="col-12 mb-3">
          <label className="form-label">Old Password</label>
          <input type="password" className="form-control" placeholder="Enter Old Password" />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" placeholder="Enter New Password" />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" placeholder="Enter Confirm Password" />
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
