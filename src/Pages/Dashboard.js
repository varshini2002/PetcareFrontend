import React from "react";
import NavbarSignIn from "../Components/NavbarSignIn";
import Footer from "../Components/Footer";
import DashboardContent from "../Components/DashboardContent";

function Dashboard() {
  return (
    <div>
      <NavbarSignIn/>
      <DashboardContent/>
      <Footer/>
    </div>
  );
}

export default Dashboard;