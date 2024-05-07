import React from "react";
import '../App.css'
import Img2 from '../Assets/Hero2.jpg'

function Hero() {
    return (

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img2} class="d-block w-100" alt="..."/> 
      <div class="carousel-caption d-none d-md-block mb-100">
        <h1 className="poppins-extrabold text-5xl mb-4">Labore reprehenderit laboris.</h1>
        <span className="poppins-regular bg-gray-500 rounded-md px-2">Quis laborum tempor laboris enim amet ea est occaecat fugiat eu minim.</span>
      </div>
    </div>
  </div>
  
</div>
 
    );
}

export default Hero;