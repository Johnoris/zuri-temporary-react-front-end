import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("success");
  };

  const handleGoogleLoginFailure = () => {
    console.log("failed");
  };

  return (
    <div className="login-page d-flex">
      <div className="login-sidebar">
        <img src={require("../../assets/images/Logo.png")} alt="" />
      </div>
      <main>
        <div className="login-box">
          <div className="login-text">
            <h1 className="login">Login</h1>
          </div>

          <form action="" className="myForm">
            <div className="firstname-field">
              <div>
                <label for="fullname" className="fullname-text">
                  Full name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="fullname"
                  className="fullname"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <p className="error"></p>
              </div>
            </div>

            <div className="frame22">
              <div className="confirm-password-field">
                <div>
                  <label
                    for="confirm-password"
                    className="confirmPassword-text"
                  >
                    Enter Password
                  </label>
                </div>
                <div className="password-fa-eye">
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div>
                    <i className="far fa-eye" id="showPassword"></i>
                  </div>
                </div>
                <div>
                  <p className="error2"></p>
                </div>
              </div>
            </div>

            <div className="rmfp">
              <div className="remember-me">
                <div>
                  <input
                    type="checkbox"
                    name="remember me"
                    className="remember"
                    value="remember-me"
                  />
                </div>
                <div>
                  <label for="remember-me" className="rememberMe-text">
                    Remember Me
                  </label>
                </div>
              </div>

              <div>
                <a
                  href={require("../auth/forgotPassword")}
                  className="forgot-password"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="login-button">
              <a href="#">Login</a>
            </div>
          </form>

          <div className="sign-up">
            <p>
              I don't have an account ?
              <Link to="/signup">Sign Up for free</Link>
              {/* <a href="http://" target="_blank" rel="noopener noreferrer">
                  Sign Up for free
                </a> */}
            </p>
          </div>
        </div>

        <div className="login-with">
          <p>Or Login with</p>
        </div>

        <div className="google-and-linkedin">
          <div className="google-wrapper">
            <GoogleLogin
              buttonText="Login with Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="linkedin">
            <div>
              <img
                src={require("../../assets/images/linkedin-icon.png")}
                alt="LinkedIn"
              />
            </div>
            <div>
              <button>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Login with LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;
