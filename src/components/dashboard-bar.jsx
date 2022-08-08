const DashboardBar= () => {
    return(
        <div className="dashboard-bar">
            <div>            <img src={require("../assets/images/Logo-white.png")} alt=""/></div>
            <button href="#">Templates</button>
            <ul>
                <li>My Designs</li>
                <li>Published Designs</li>
                <li>Logout</li>
            </ul>
            <div className="user-details">
                <div className="user-initials"><h4>A</h4></div>
                <p>Ayobami Israel</p>
            </div>
        </div>
    )
}
export default DashboardBar;