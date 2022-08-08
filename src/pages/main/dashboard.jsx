import DashboardBar from "../../components/dashboard-bar";
import TemplateCard from "../../components/templateCard";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <DashboardBar/>
            <div className="dashboard-content">
                <h1>Hi, Ayobami Israel</h1>
                <p>Start building from here, choose from our customizable templates to create your website with just a click.</p>
                <div className="dashboard-templates">
                    <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                    <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/portfolio.png")}/>
                    <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;