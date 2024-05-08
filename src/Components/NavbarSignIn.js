import React from 'react';
import Logo from '../Assets/Logo.png'

function NavbarSignIn() {

    const userProfile = {
        username: 'Name',
        email: 'name@example.com'
    };

    return (
        <div className="absolute my-2 Bg-color  z-10 text-white px-3 flex Width mx-2 h-17 justify-between items-center rounded-xl ">
            <div className="flex ">                
                <a href="#" className="logo no-underline justify-center">
                    <img src={Logo} alt="Logo" className="w-12 mt-3"/>
                </a>
                <a href="#" className="name no-underline ml-1 text-white font-bold  pacifico-regular">PetCare.</a>
            </div>
            
            <p className=" absolute right-14 top-5 poppins-regular text-white">Welcome, {userProfile.username}!</p> 
            
            
            <div className="account"> 
            <span class="material-symbols-outlined size-header">account_circle</span>
            </div>
        </div>
    );
  }
  
  export default NavbarSignIn;