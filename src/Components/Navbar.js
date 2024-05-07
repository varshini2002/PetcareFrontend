import React from 'react';
import Logo from '../Assets/Logo.png'

function Navbar() {
    return (
        <div className="Bg-color fixed z-10 text-white px-3 flex Width mx-3 h-17 justify-between items-center rounded-xl my-2">
            <div className="flex ">                
                <a href="#" className="logo no-underline justify-center">
                    <img src={Logo} alt="Logo" className="w-12 mt-3"/>
                </a>
                <a href="#" className="name no-underline ml-1 text-white font-bold  pacifico-regular">PetCare.</a>
            </div>
            <div className="">                
                <a href="#" className="poppins-regular bg-gray-500 rounded-lg px-3 py-2 text-white no-underline">Register</a>
                <a href="signin" className="poppins-regular bg-gray-500 rounded-lg px-3 py-2 text-white no-underline ml-2">Sign In</a>
            </div>
        </div>
    );
  }
  
  export default Navbar;