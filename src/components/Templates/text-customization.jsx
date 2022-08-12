import { useState } from "react";

const TextCustomization = (active) => {
    const [textColor , setTextColor] = useState("#ffffff");
    const handleTextColorChange = (e) => {
        setTextColor(e.target.value);
        document.getElementById(active.active).style.color = e.target.value
    }
    const handleClose = () => {
        document.getElementById("customize-text-bar").style.display = "none"
    }
    const handleTextAlignCenter = () => {
        document.getElementById(active.active).style.textAlign = "center"
    }
    const handleTextAlignLeft = () => {
        document.getElementById(active.active).style.textAlign = "left"
    }

    const handleTextAlignRight = () => {
        document.getElementById(active.active).style.textAlign = "right"
    }
    const handleTextAlignJustify = () => {
        document.getElementById(active.active).style.textAlign = "justify"
    }
    const handleUnderline = () => {
        document.getElementById(active.active).style.textDecoration = "underline"
    }
    const handleLineThrough = () => {
        document.getElementById(active.active).style.textDecoration = "line-through"
    }
    const handleFontSize = (e) => {
        document.getElementById(active.active).style.fontSize = (e.target.value)
    }
    const handleFontWeight = (e) => {
        if (e.target.value === "regular") {
            document.getElementById(active.active).style.fontWeight = 200;
        }
        else if (e.target.value === "semibold"){
            document.getElementById(active.active).style.fontWeight = 400;
        }
        else if (e.target.value === "bold"){
            document.getElementById(active.active).style.fontWeight = 600;
        }
        else if (e.target.value === "extrabold"){
            document.getElementById(active.active).style.fontWeight = 800;
        }
        else if (e.target.value === "italic"){
            document.getElementById(active.active).style.fontStyle = "italic";
        }
        else if (e.target.value === "black"){
            document.getElementById(active.active).style.color = "black";
        }
    }
    const handleFontFamily = (e) => {
        document.getElementById(active.active).style.fontFamily = e.target.value;
    }
    const handleTextChange =  () => {
            document.getElementById(active.active).innerHTML = document.querySelector("textarea").value
    }
    const handleTextTransform = (e) => {
        document.getElementById(active.active).style.textTransform = e.target.value;
    }
    const [left ,setLeft] = useState(false)
    const handleSwitch = () => {
        setLeft(!left)
        if (left === false){
        document.getElementById("customize-text-bar").style.right = "17px";
        document.getElementById("customize-text-bar").style.left = "auto";
        }
        else{
            document.getElementById("customize-text-bar").style.left = "17px";
        }
    }

    return(
        <div className="customize-text" id="customize-text-bar">
            <div className="close-container">
                <h4>You are customizing text</h4>
                <img onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <h4 onClick={handleSwitch}>switch sides</h4>
            <button onClick={handleTextChange} >Add Text</button>
            <div>
                <textarea className="customize-text-change" defaultValue="High level experience in user centered design solving user problem and creating solutions that enhance productivity and growth in businesses through designs"></textarea>
            </div>
            <div className="text-align">
                <img onClick={handleTextAlignLeft} src={require("../../assets/images/dark-text-align-left-icon.png")} alt=""/>
                <img onClick={handleTextAlignCenter} src={require("../../assets/images/dark-text-align-center-icon.png")} alt=""/>
                <img onClick={handleTextAlignJustify} src={require("../../assets/images/dark-justify-text-icon.png")} alt=""/>
                <img onClick={handleTextAlignRight} src={require("../../assets/images/dark-text-align-right-icon.png")} alt=""/>
                <img onClick={handleUnderline} src={require("../../assets/images/underline-icon.png")} alt=""/>
                <img onClick={handleLineThrough} src={require("../../assets/images/line-through-icon.png")} alt=""/>
            </div>
            <div className="edit-text">
                <h4>Text</h4>
                <div>
                    <select className="font-weight" onChange={handleFontWeight}>
                        <option value="regular">Regular</option>
                        <option value="semibold">Semi Bold</option>
                        <option value="bold">Bold </option>
                        <option value="extrabold">Extra Bold</option>
                        <option value="italic">Italic</option>
                        <option value="black">Black</option>
                    </select>
                    <select className="font-size" onChange={handleFontSize}>
                        <option value="8px">8</option>
                        <option value="12px">12</option>
                        <option value="16px">16</option>
                        <option value="20px">20</option>
                        <option value="24px">24</option>
                        <option value="28px">28</option>
                        <option value="32px">32</option>
                        <option value="48px">48</option>
                        <option value="56px">56</option>
                        <option value="72px">72</option>
                        <option value="80px">80</option>
                    </select>
                    <select className="font-style" onChange={handleFontFamily}>
                        <option value="open sans">Open Sans</option>
                        <option value="arial">Arial</option>
                        <option value="arial black">Arial Black</option>
                        <option value="baskerville">Baskerville</option>
                        <option value="brush script mt">Brush Script MT</option>
                        <option value="helvetica">Helvetica</option>
                        <option value="impact">Impact</option>
                        <option value="gill sans">Gill Sans</option>
                    </select>
                    <select className="text-transform" onChange={handleTextTransform}>
                        <option value="uppercase">UPPER CASE</option>
                        <option value="lowercase">lower case</option>
                        <option value="capitalize">Title Case</option>
                    </select>
                </div>
                <div className="d-flex text-color">
                    <h6>Text color:</h6>
                    <input  onChange={handleTextColorChange} type="color" value={textColor}/>
                    <h6>or input color hex code:</h6>
                    <input onChange={handleTextColorChange} type="text" className="colour-code"/>
                </div>
            </div>
            <button onClick={handleClose} className="preview">Preview</button>
        </div>
    )
}
export default TextCustomization;