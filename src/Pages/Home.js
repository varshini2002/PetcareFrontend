import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HeroCard from "../Components/HeroCard";
import HeroMessage from "../Components/HeroMessage";


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