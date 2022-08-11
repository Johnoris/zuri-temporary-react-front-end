import { useState } from "react";
import ButtonCustomization from "./buttoncustomization";
import CustomizeIcons from "./customizesocialicons";
import ImageCustomization from "./imageCustomization";
import TemplateNav from "./template-nav";
import TextCustomization from "./text-customization";

const PortfolioTemplate = () => {
    const [image , setImage] = useState("../../assets/images/portfolio-template-default.png")
    return(
        <div>
          <TextCustomization/>
          <TemplateNav/>
          <div className="portfolio-template-body">
            <div className="portfolio-template-header">
                <div className="portfolio-template-top">
                    <div>
                        <h2>ACE</h2>
                    </div>
                    <div className="portfolio-template-links">
                        <h5>ABOUT</h5>
                        <h5>PORTFOLIO</h5>
                        <button>CONTACT ME</button>
                    </div>
                </div>
                <div className="portfolio-template-main">
                    <div className="portfolio-template-main-text">
                        <h1>Hi, I’m John Josh</h1>
                        <p id="job-title">Product Designer</p>
                        <p id="job-description">High level experience in user centerd designsolving user problem and creating solutions that enhance productivity and growth in businesses throu designs</p>
                        <button>CONTACT ME</button>
                    </div>
                    <div className="portfolio-img">
                        <img id="portfolio-img" src={require("../../assets/images/portfolio-template-default.png")} alt=""/>
                    </div>
                </div>
            </div>
            <div className="portfolio-section-wrapper">
                <div className="my-portfolio">
                    <h2>MY PORTFOLIO</h2>
                    <div className="portfolio-section">
                        <span><img src={require("../../assets/images/portfolio-1.png")} alt=""/></span>
                        <div>
                            <h3>AREA E-MARKET CASE STUDY</h3>
                            <h4>PROJECT SUMMARY</h4>
                            <h5>Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                    </div>
                    <div className="portfolio-section">
                        <div>
                            <h3>AREA E-MARKET CASE STUDY</h3>
                            <h4>PROJECT SUMMARY</h4>
                            <h5>Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                        <span><img src={require("../../assets/images/portfolio-2.png")} alt=""/></span>
                    </div>
                    <div className="portfolio-section">
                        <span><img src={require("../../assets/images/portfolio-3.png")} alt=""/></span>
                        <div>
                            <h3>AREA E-MARKET CASE STUDY</h3>
                            <h4>PROJECT SUMMARY</h4>
                            <h5>Lörem ipsum ebel vitrede. Intrassa oligt till äprer. Ack refana. Orägt domis pöl epingen. Kringmyndighet semiitet, ett krora. Du kan vara drabbad. </h5>
                            <button className="portfolio-buttons">VIEW PROJECT</button>
                        </div>
                    </div>
                    <div className=".portfolio-footer">
                        <h2>Do you have a project you want to do?</h2>
                        <p>Contact me on</p>
                        <div className="portfolio-icons">
                            <img src={require("../../assets/images/white-facebook-icon.png")} alt=""/>
                            <img src={require("../../assets/images/white-instagram-icon.png")} alt=""/>
                            <img src={require("../../assets/images/white-twitter-icon.png")} alt=""/>
                            <img src={require("../../assets/images/white-linkedin-icon.png")} alt=""/>
                        </div>
                        <p>Or call</p>
                        <div className="portfolio-contact">
                            <p> 08100959095, 09077733833</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        </div>
    )
}
export default PortfolioTemplate;