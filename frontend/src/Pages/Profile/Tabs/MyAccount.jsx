import './Tab.css';

function MyAccount() {
    return (
        <form className="row">
            <h3 className="fw-bold">My Account</h3>
            <div className="col-md-6 mt-2 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>
                <select className="form-select">
                    <option>LK</option>
                    <option>US</option>
                    <option>UK</option>
                </select>
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone Number" />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Secondary Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Secondary Phone Number"
                />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Date Of Birth</label>
                <input type="date" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="col-12">
                <button type="submit" className="btn save-btn">
                    Save
                </button>
            </div>
        </form>
    )
}

export default MyAccount