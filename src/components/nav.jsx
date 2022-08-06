import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav>
            <span><img src={require('../assets/images/favicon.png')} alt="thirtin logo" /> </span>
            <div class="navbar">
                <Link to="/">Home</Link>
                <Link to="/templates">Template</Link>
                <Link to="/about">About 13</Link>
                <Link to="/help" class="help">Help <i class="fa fa-angle-down"></i></Link>
                <Link to="/login">Login</Link>
                <Link to="/get-started" class="get-started">Get Started</Link>
            </div>
        </nav>
    )
}
export default Nav;