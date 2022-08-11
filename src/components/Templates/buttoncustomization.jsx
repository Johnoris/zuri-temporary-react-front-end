const ButtonCustomization = () => {
    return(
        <div className="customize-button">
            <div className="close-container">
                <h4>You are customizing Button </h4>
                <img src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <div>
                <h4>Button Text</h4>
                <input type="text" className="contact-me" defaultValue="CONTACT ME"/>
                <p>URL Link  (where do you want this button to direct your users to?)</p>
                <input className="href" type="text" defaultValue="http://asdfghjkk@gmail.com"/>
                <div className="d-flex">
                    <h5>Background Color:</h5>
                    <input type="color" defaultValue="#ffffff"/>
                </div>
            </div>
            <button className="preview">Preview</button>
        </div>
    )
}
export default ButtonCustomization;