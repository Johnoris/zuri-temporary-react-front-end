const CustomizeIcons = () => {
    return(
        <div className="customize-icons">
            <div className="close-container">
                <h4>You are customizing text</h4>
                <img  src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <button className="add-social">Add Social</button>
            <Socials src={require("../../assets/images/dark-linkedin-icon.png")} label="Linkedin"/>
            <Socials src={require("../../assets/images/facebook-icon.png")} label="Facebook"/>
            <Socials src={require("../../assets/images/instagram-icon.png")} label="Instagram"/>
            <Socials src={require("../../assets/images/dark-twitter-icon.png")} label="Twitter"/>
            <Socials src={require("../../assets/images/mail-icon.png")} label="Mail"/>
            <button className="preview">Preview</button>
        </div>
    )
}
const Socials = (props) => {
    return(
    <div  className="social-wrapper">  
        <h4>{props.label}</h4>
        <div className="social-container">
            <div><img src={props.src} alt=""/></div>
            <input value="URL link" />
            <div>
                <img src={require("../../assets/images/dark-delete-icon.png")} alt="" />
            </div>
        </div>
    </div>
    )
}
export default CustomizeIcons;