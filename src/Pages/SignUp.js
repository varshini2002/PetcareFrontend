import React from "react";
import Header from "../Components/Navbar";
import SignUpDialog from "../Components/SignUpDialog";
import Footer from "../Components/Footer";

function Signup() {
  return (
    <div>
      <Header />
      <SignUpDialog />
      {/* <Footer /> */}
    </div>
  );
}

export default Signup;