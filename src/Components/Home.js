import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroCard from "./HeroCard";
import HeroMessage from "./HeroMessage";


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="flex justify-center space-x-3">
        <HeroCard/>
        <HeroCard/>
        <HeroCard/>
      </div>
      <HeroMessage/>
      <Footer/>
    </div>
  );
}

export default Home;
