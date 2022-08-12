import { useState } from "react"

const ButtonCustomization = (active) => {
    console.log(active)
    const handleClose = () => {
        document.getElementById("customize-button-bar").style.display = "none"
    }
    const handleHref= (e) => {
        document.getElementById(active.active).setAttribute("href", e.target.value)
    }
    const handleValue= (e) => {
        document.getElementById(active.active).innerHTML = e.target.value;
    }
    const [left ,setLeft] = useState(false)
    const handleSwitch = () => {
        setLeft(!left)
        if (left === false){
        document.getElementById("customize-button-bar").style.right = "17px";
        document.getElementById("customize-button-bar").style.left = "auto";
        }
        else{
            document.getElementById("customize-button-bar").style.left = "17px";
        }
    }
    return(
        <div className="customize-button" id="customize-button-bar">
            <div className="close-container">
                <h4>You are customizing Button </h4>
                <img onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <h4 onClick={handleSwitch}>switch sides</h4>
            <div>
                <h4>Button Text</h4>
                <input type="text" className="contact-me" onChange={handleValue} defaultValue="CONTACT ME"/>
                <p>URL Link  (where do you want this button to direct your users to?)</p>
                <input className="href" type="text" onChange={handleHref} defaultValue="http://asdfghjkk@gmail.com"/>
                <div className="d-flex">
                    <h5>Background Color:</h5>
                    <input type="color" defaultValue="#ffffff"/>
                </div>
            </div>
            <button onClick={handleClose} className="preview">Preview</button>
        </div>
    )
}
export default ButtonCustomization;