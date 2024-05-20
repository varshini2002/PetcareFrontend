import React from "react";
import FooterTransparent from "../Components/FooterTransparent";
import DashboardContent from "../Components/DashboardContent";
import NavbarTransparent from "../Components/NavbarTransparent";

function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-yellow-950 to-transparent">
      <NavbarTransparent/>
      <DashboardContent/>
      <FooterTransparent/>
    </div>
  );
}

export default Dashboard;