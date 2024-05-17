import React from "react";
import Header from '../Components/Navbar';
import ForgotPassDialog from '../Components/ForgotPasswordDialog';



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