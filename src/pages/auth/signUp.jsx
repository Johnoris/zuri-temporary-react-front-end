const SignUp = () => {
    return (
        <div>
            <main className="sign-up-wrapper">
                <div className="sign-up-icon">
                    <img src={require('../../assets/images/Logo-white.png')} alt=""/>
                </div>
                <div className="sign-up-form">
                    <h3>Sign Up</h3>
                    <form className="w-100">
                        <div className="w-100 align-center">
                            <p>Full name</p>
                            <input  className="input-1" type="text" placeholder="Enter full name"/>
                        </div>
                        <div className="w-100 align-center">
                            <p>Email</p>
                            <input className="input-1" type="email" placeholder="Enter email address"/>
                        </div>
                        <div className="w-100 align-center">
                            <p>Password</p>
                            <div className="input">
                                <input type="password" placeholder="Enter Password"/>
                                <img src={require('../../assets/images/view-password-icon.png')} alt=""/>
                            </div>
                        </div>
                        <div className="w-100 align-center">
                            <p>Confirm Password</p>
                            <div className="input">
                                <input type="password" placeholder="Enter Password"/>
                                <img src={require('../../assets/images/view-password-icon.png')} alt=""/>
                            </div>
                        </div>
                        <button type="submit" >Sign Up</button>
                        <h5>Already have an account?<a href="/signup"> Login</a></h5>
                    </form>
                </div>
                <h4>Or Sign up with</h4>
                <div className="sign-up-method">
                    <div>
                        <img src={require('../../assets/images/google-icon.png')} alt=""/>
                    </div>
                    <div>
                        <h6>Login with Google</h6>
                    </div>
                </div>
                <div className="sign-up-method mgt-48">
                    <div>
                    <img src={require('../../assets/images/linkedin-icon.png')} alt=""/>
                    </div>
                    <div>
                        <h6>Login with Linkedin</h6>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default SignUp;