import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroCard from "./HeroCard";


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroCard/>
      <Footer/>
    </div>
  );
}

export default Home;
