import TemplateNav from "./template-nav";

const PortfolioTemplate = () => {
    return(
        <div>
          <TemplateNav/>
          <div className="portfolio-template-body">
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
                    <p>Product Designer</p>
                    <p>High level experience in user centerd designsolving user problem and creating solutions that enhance productivity and growth in businesses throu designs</p>
                    <button>CONTACT ME</button>
                </div>
                <div>
                    <img src={require("../../assets/images/portfolio-template-default.png")} alt=""/>
                </div>
            </div>
          </div>  
        </div>
    )
}
export default PortfolioTemplate;