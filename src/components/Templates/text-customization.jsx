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
        setFontSize(e.target.value)
        document.querySelector("h1").style.fontSize = fontSize
        console.log(fontSize)
    }
    const handleFontWeight = (e) => {
        let fontWeight = e.target.value
        console.log(fontWeight)
        if (fontWeight === "regular") {
            document.querySelector("h1").style.fontWeight = 200;
        }
        else if (fontWeight === "semibold"){
            document.querySelector("h1").style.fontWeight = 400;
        }
        else if (fontWeight === "bold"){
            document.querySelector("h1").style.fontWeight = 600;
        }
        else if (fontWeight === "extrabold"){
            document.querySelector("h1").style.fontWeight = 800;
        }
        else if (fontWeight === "italic"){
            document.querySelector("h1").style.fontStyle = "italic";
        }
        else if (fontWeight === "black"){
            document.querySelector("h1").style.color = "black";
        }
        document.querySelector("h1").style.fontSize = fontSize
    }
    const handleFontFamily = (e) => {
        let fontFamily = e.target.value
        document.querySelector("h1").style.fontFamily = fontFamily;
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
                    <select className="text-transform">
                        <option value="uppercase">UPPER CASE</option>
                        <option value="lowercase">lower case</option>
                        <option value="uppercase">Sentence case</option>
                        <option value="titlecase">Title Case</option>
                        <option value="togglecase">toGGLe caSe</option>
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