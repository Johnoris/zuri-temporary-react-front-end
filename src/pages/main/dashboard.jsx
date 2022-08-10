import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardBar from "../../components/dashboard-bar";
import TemplateCard from "../../components/templateCard";

const Dashboard = () => {
  const location = useLocation();
  const [name, setName] = useState("Ayobami Israel");

  useEffect(() => {
    console.log(location);
    if (location.state) setName(location.state.userDetails.fullname);
  }, []);

  return (
    <div className="dashboard">
      <DashboardBar name={name} />
      <div className="dashboard-content">
        <h1>Hi, {name}</h1>
        <p>
          Start building from here, choose from our customizable templates to
          create your website with just a click.
        </p>
        <div className="dashboard-templates">
          <TemplateCard
            href="#"
            text="Profile Card Template"
            src={require("../../assets/images/profile-card.png")}
          />
          <TemplateCard
            href="#"
            text="Portfolio Website Template"
            src={require("../../assets/images/portfolio.png")}
          />
          <TemplateCard
            href="#"
            text="Business Website Template"
            src={require("../../assets/images/business-website.png")}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
