import React from 'react';
import Logo from '../Assets/Logo.png'
import LogOutMenu from './LogOutMenu';

function NavbarTransparent() {


    return (
        <div className="relative top-2 bg-transparent z-10 text-white px-3 flex Width mx-2 h-17 justify-between items-center rounded-xl ">
            <div className="flex ">                
                <a href="/dashboard" className="logo no-underline justify-center">
                    <img src={Logo} alt="Logo" className="w-12 mt-3"/>
                </a>
                <a href="/dashboard" className="name no-underline ml-1 text-white font-bold  pacifico-regular">PetCare.</a>
            </div>
            
            {/* <p className=" absolute right-20 top-5 poppins-regular text-white">Welcome, {userProfile.username}!</p>  */}
            
            
            <div className="account"> 
            <LogOutMenu/>
            
            </div>
        </div>
    );
  }
  
  export default NavbarTransparent;