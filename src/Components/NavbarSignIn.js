import React from 'react';
import Logo from '../Assets/Logo.png'
import LogOutMenu from './LogOutMenu';

function NavbarSignIn() {

    const userProfile = {
        username: 'Name',
        email: 'name@example.com'
    };

    return (
        <div className="relative top-2 Bg-color z-10 text-white px-3 flex Width mx-2 h-17 justify-between items-center rounded-xl ">
            <div className="flex ">                
                <a href="#" className="logo no-underline justify-center">
                    <img src={Logo} alt="Logo" className="w-12 mt-3"/>
                </a>
                <a href="#" className="name no-underline ml-1 text-white font-bold  pacifico-regular">PetCare.</a>
            </div>
            
            <p className=" absolute right-20 top-5 poppins-regular text-white">Welcome, {userProfile.username}!</p> 
            
            
            <div className="account"> 
            <LogOutMenu/>
            
            </div>
        </div>
    );
  }
  
  export default NavbarSignIn;