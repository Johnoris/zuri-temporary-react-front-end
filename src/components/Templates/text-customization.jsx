import { useState } from "react";

const TextCustomization = () => {
    const [text, setText] = useState("");
    const [active , setActive] = useState("")
    // const setH1Active = () => {
    //     document.querySelector("")
    //     setActive("h1")
    //     document.querySelector("h1").style.border = "1px dotted #ffffff"
    // }

    const [textColor , setTextColor] = useState("#ffffff");
    const [fontSize , setFontSize] = useState("47px");
    const handleTextColorChange = (e) => {
        setTextColor(e.target.value)
        
        document.querySelector("h1").style.color = textColor
    }
    const handleClose = () => {
        document.getElementById("customize-text-bar").style.display = "none"
    }
    const handleTextAlignCenter = () => {
        document.querySelector("h1").style.textAlign = "center"
    }
    const handleTextAlignLeft = () => {
        document.querySelector("h1").style.textAlign = "left"
    }

    const handleTextAlignRight = () => {
        document.querySelector("h1").style.textAlign = "right"
    }
    const handleTextAlignJustify = () => {
        document.querySelector("h1").style.textAlign = "justify"
    }
    const handleUnderline = () => {
        document.querySelector("h1").style.textDecoration = "underline"
    }
    const handleLineThrough = () => {
        document.querySelector("h1").style.textDecoration = "line-through"
    }
    const handleFontSize = (e) => {
        setFontSize(e.target.value + "px")
        document.querySelector("h1").style.fontSize = fontSize
        console.log(fontSize)
    }
    const handleTextChange =  () => {
            setText(document.querySelector("textarea").value)
            document.getElementById("job-description").innerHTML = text
            console.log(text)
    }


    return(
        <div className="customize-text" id="customize-text-bar">
            <div className="close-container">
                <h4>You are customizing text</h4>
                <img onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
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
                    <select className="font-weight">
                        <option>Regular</option>
                        <option>Semi Bold</option>
                        <option>Bold </option>
                        <option>Extra Bold</option>
                        <option>Italic</option>
                        <option>Black</option>
                    </select>
                    <select className="font-size">
                        <option>8</option>
                        <option>12</option>
                        <option>16</option>
                        <option>20</option>
                        <option>24</option>
                        <option>28</option>
                        <option>32</option>
                        <option>48</option>
                        <option>56</option>
                        <option>72</option>
                        <option>80</option>
                    </select>
                    <select className="font-style">
                        <option>Open Sans</option>
                        <option>Arial</option>
                        <option>Arial Black</option>
                        <option>Baskerville</option>
                        <option>Brush Script MT</option>
                        <option>Helvetica</option>
                        <option>Impact</option>
                        <option>Gill Sans</option>
                    </select>
                    <select className="text-transform">
                        <option>UPPER CASE</option>
                        <option>lower case</option>
                        <option>Sentence case</option>
                        <option>Title Case</option>
                        <option>toGGLe caSe</option>
                    </select>
                </div>
                <div className="d-flex text-color">
                    <h6>Text color:</h6>
                    <input  onChange={handleTextColorChange} type="color" value={textColor}/>
                    <h6>or input color hex code:</h6>
                    <input onChange={handleTextColorChange} type="text" className="colour-code"/>
                </div>
            </div>
            <button className="preview">Preview</button>
        </div>
    )
}
export default TextCustomization;