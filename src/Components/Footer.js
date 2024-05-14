import React from "react";
import '../App.css';
import Logo from '../Assets/Logo.png'



function Footer() {
    return (
        <div className="relative poppins-regular h-20 Bg-color Footer bottom-0 z-50 w-full  bg-gray-200 ">
            <div className=" flex items-center justify-center h-full">
                <img src={Logo} alt="Logo" className="w-10 "/>
                <p className="pacifico-regular-footer text-white mt-2"> PetCare.</p>
                <p className=" text-white ml-4 mt-3">© 2024 PetCare. All rights reserved.</p>
            </div>
        </div> 
    );
}

export default Footer