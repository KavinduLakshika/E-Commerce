import "./SignUp.css";
import prod from '../../assets/prod.webp';

function SignUp() {
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

                    <div className="col-md-6 d-flex flex-column justify-content-center p-5">
                        <h3 className="text-center">Create Account</h3>

                        <div className="frm mb-3">
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" placeholder="Name" />
                                <label >Name </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <label >Email </label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" placeholder="Password" />
                                <label >Password</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <button className="btn  my-3 signIn-btn">
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

                        <button className="btn my-3 sign-btn">
                            <i className="fab fa-google me-2"></i> Sign Up With Google
                        </button>

                        <div className="text-center">
                            <a href="/login" className="text-decoration-none">
                                Already a Member ? <span className="singIn">Sign In</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp