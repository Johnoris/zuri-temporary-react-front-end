import { useState } from "react";
import ButtonCustomization from "./buttoncustomization";
import CustomizeIcons from "./customizesocialicons";
import ImageCustomization from "./imageCustomization";
import TemplateNav from "./template-nav";
import TextCustomization from "./text-customization";

const PortfolioTemplate = () => {
    const [textActive, setTextActive] = useState(false)
    const [imageActive, setImageActive] = useState(false)
    const [buttonActive, setButtonActive] = useState(false)
    const [socialActive, setsocialActive] = useState(false)
    const [activeID, setActiveID] = useState("")
    const handleTextActive = (e) => {
        setTextActive(true)
        setImageActive(false)
        setButtonActive(false)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleImageActive = (e) => {
        setTextActive(false)
        setImageActive(true)
        setButtonActive(false)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleButtonActive = (e) => {
        setTextActive(false)
        setImageActive(false)
        setButtonActive(true)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleSocialActive = (e) => {
        setTextActive(false)
        setImageActive(false)
        setButtonActive(false)
        setsocialActive(true)
        setActiveID(e.target.id)
    }
    return(
        <div>
          {textActive && <TextCustomization active={activeID}/>}
          {imageActive && <ImageCustomization active={activeID}/>}
          {buttonActive && <ButtonCustomization active={activeID}/>}
          {socialActive && <CustomizeIcons active={activeID}/>}
          <TemplateNav/>
          <div className="portfolio-template-body">
            <div className="portfolio-template-header">
                <div className="portfolio-template-top">
                    <div>
                        <h2 id="portfolio-logo" onClick={handleTextActive}>ACE</h2>
                    </div>
                    <div className="portfolio-template-links">
                        <h5 id="nav-link-1" onClick={handleTextActive}>ABOUT</h5>
                        <h5 id="nav-link-2" onClick={handleTextActive}>PORTFOLIO</h5>
                        <button onClick={handleButtonActive} id="button-1">CONTACT ME</button>
                    </div>
                </div>
                <div className="portfolio-template-main">
                    <div className="portfolio-template-main-text">
                        <h1 id="introduction" onClick={handleTextActive}>Hi, I’m John Josh</h1>
                        <p id="job-title" onClick={handleTextActive}>Product Designer</p>
                        <p id="job-description" onClick={handleTextActive}>High level experience in user centerd designsolving user problem and creating solutions that enhance productivity and growth in businesses throu designs</p>
                        <button id="button-2" onClick={handleButtonActive}>CONTACT ME</button>
                    </div>
                    <div className="portfolio-img">
                        <img onClick={handleImageActive} id="portfolio-img" src={require("../../assets/images/portfolio-template-default.png")} alt=""/>
                    </div>
                </div>
            </div>
            <div className="portfolio-section-wrapper">
                <div className="my-portfolio">
                    <h2>MY PORTFOLIO</h2>
                    <div className="portfolio-section">
                        <span><img onClick={handleImageActive} id="portfolio-img1" src={require("../../assets/images/portfolio-1.png")} alt=""/></span>
                        <div>
                            <h3 onClick={handleTextActive} id="portfolio-section-1-h3">AREA E-MARKET CASE STUDY</h3>
                            <h4 onClick={handleTextActive} id="portfolio-section-1-h4">PROJECT SUMMARY</h4>
                            <h5 onClick={handleTextActive} id="portfolio-section-1-h5">Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button id="button-3" onClick={handleButtonActive} className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                    </div>
                    <div className="portfolio-section">
                        <div>
                            <h3 onClick={handleTextActive} id="portfolio-section-2-h3">AREA E-MARKET CASE STUDY</h3>
                            <h4 onClick={handleTextActive} id="portfolio-section-2-h4">PROJECT SUMMARY</h4>
                            <h5 onClick={handleTextActive} id="portfolio-section-2-h5">Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button id="button-4" onClick={handleButtonActive} className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                        <span><img onClick={handleImageActive} id="portfolio-img2" src={require("../../assets/images/portfolio-2.png")} alt=""/></span>
                    </div>
                    <div className="portfolio-section">
                        <span><img onClick={handleImageActive} id="portfolio-img3" src={require("../../assets/images/portfolio-3.png")} alt=""/></span>
                        <div>
                            <h3 onClick={handleTextActive} id="portfolio-section-3-h3">AREA E-MARKET CASE STUDY</h3>
                            <h4 onClick={handleTextActive} id="portfolio-section-3-h4">PROJECT SUMMARY</h4>
                            <h5 onClick={handleTextActive} id="portfolio-section-3-h5">Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button id="button-5" onClick={handleButtonActive} className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                    </div>
                    <div className="portfolio-footer">
                        <h2 onClick={handleTextActive}>Do you have a project you want to do?</h2>
                        <p onClick={handleTextActive} id="portfolio-call-me-on">Contact me on</p>
                        <div className="portfolio-icons" onClick={handleSocialActive}>
                            <a id="facebook-icon"><img  src={require("../../assets/images/white-facebook-icon.png")} href="https://www.facebook.com" alt=""/></a>
                            <a id="instagram-icon"><img  src={require("../../assets/images/white-instagram-icon.png")} alt=""/></a>
                            <a  id="twitter-icon"><img src={require("../../assets/images/white-twitter-icon.png")} alt=""/></a>
                            <a id="linkedin-icon" ><img src={require("../../assets/images/white-linkedin-icon.png")} alt=""/></a>
                        </div>
                        <p onClick={handleTextActive} id="portfolio-or-call">Or call</p>
                        <div className="portfolio-contact">
                            <p onClick={handleTextActive} id="portfolio-contact"> 08100959095, 09077733833</p>
                        </div>
                    </div>
                    <div className="bottom"></div>
                </div>
            </div>
          </div>  
        </div>
    )
}
export default PortfolioTemplate;