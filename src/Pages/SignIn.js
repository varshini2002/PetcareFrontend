import React from "react";
import Header from "../Components/Navbar";
import SignInDialog from "../Components/SignInDialog";
import Footer from "../Components/Footer";

function SignIn() {
  return (
    <div>
      <Header />
      <SignInDialog />
      {/* <Footer /> */}
    </div>
  );
}

export default SignIn;