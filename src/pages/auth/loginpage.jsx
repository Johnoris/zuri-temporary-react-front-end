const LoginPage = () => {
    return (
        <body>
            <main>
                <div className="logo-section">
                    <div className="thirtin-logo">
                        <img src={require("../../assets/images/Logo-white.png")} alt="" srcset="" className="logo"/>
                    </div>
                </div>
                <div className="form-section">
                    <div className="login-screen">

                        <div className="login-box">
                            <div className="login-text">
                                <h1 className="login">Login</h1>
                            </div>

                            <form action="" className="myForm">
                                <div className="firstname-field">
                                    <div>
                                        <label for="fullname" className="fullname-text">Full name</label>
                                    </div>
                                    <div>
                                        <input type="text" name="fullname" className="fullname" placeholder="Enter full name"/>
                                    </div>
                                    <div>
                                        <p className="error"></p>
                                    </div>
                                </div>

                                <div className="frame22">
                                    <div className="confirm-password-field">
                                        <div>
                                            <label for="confirm-password" className="confirmPassword-text">
                                                Confirm Password</label>
                                        </div>

                                        <div>
                                            <input type="password" name="confirmPassword" className="password" placeholder="Enter Password"/>
                                            <i className="far fa-eye" id="showPassword"></i>
                                        </div>
                                        <div>
                                            <p className="error2"></p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rmfp">

                                    <div className="remember-me">
                                        <div>
                                            <input type="checkbox" name="remember me" className="remember" value="remember-me"/>
                                        </div>
                                        <div>
                                            <label for="remember-me" className="rememberMe-text">Remember Me</label>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="forgetpassword.html" className="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>


                                <div className="login-button">
                                    <a href="#">Login</a>
                                </div>
                            </form>

                            <div className="sign-up">
                                <p>
                                    I don't have an account ?
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Sign Up for free</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="login-with">
                        <p>Or Login with</p>
                    </div>


                    <div className="google-and-linkedin">
                        <div className="google">
                            <div>
                                <img src={require("../../assets/images/google-icon.png")} alt="google image" className="google-image"/>
                            </div>
                            <div>
                                <button>
                                    <a href="#" target="_blank">
                                        Login with Google
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="linkedin">
                            <div><img src={require("../../assets/images/linkedin-icon.png")} alt="LinkedIn image"/></div>
                            <div>
                                <button>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Login with LinkedIn
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
};
export default LoginPage;
