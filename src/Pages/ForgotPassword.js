import React from "react";
import Header from '../Components/Navbar';
import ForgotPassDialog from '../Components/ForgotPasswordDialog';
import Footer from '../Components/Footer';



function ForgotPassword(){
    return (
    <div>
      <Header/>
      <ForgotPassDialog />           
      {/* <Footer/> */}
    </div>
    );
}

export default ForgotPassword;