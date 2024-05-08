import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HeroCard from "../Components/HeroCard";
import HeroMessage from "../Components/HeroMessage";
import WelcomeMessage from "../Components/WelcomeMessage";
import details from "../Components/HeroCardDetails";

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WelcomeMessage/>
      <div className="flex justify-center space-x-3">
        <HeroCard 
        title={details[0].title} icon={details[0].icon} text={details[0].text}/>
        <HeroCard
        title={details[1].title} icon={details[1].icon} text={details[1].text}/>
        <HeroCard
        title={details[2].title} icon={details[2].icon} text={details[2].text}/>
      </div>
      <HeroMessage/>
      <Footer/>
    </div>
  );
}

export default Home;