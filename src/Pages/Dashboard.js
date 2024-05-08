import React from "react";
import NavbarSignIn from "../Components/NavbarSignIn";
import Footer from "../Components/Footer";
import LoginPage from "../Components/DashboardContent";

function Dashboard() {
  return (
    <div>
      <NavbarSignIn/>
      
      <LoginPage/>
      <Footer/>
    </div>
  );
}

export default Dashboard;