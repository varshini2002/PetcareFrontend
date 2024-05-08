import React from "react";
import '../App.css';
import Logo from '../Assets/Logo.png'

var date=new Date();
var year = date.getFullYear();

function Footer() {
    return (
        <div className="poppins-regular bottom-0 z-50 w-full h-20 Bg-color Footer">
            <div className=" flex items-center justify-center h-full">
                <img src={Logo} alt="Logo" className="w-10 "/>
                <p className="pacifico-regular-footer text-white mt-2"> PetCare.</p>
                <p className=" text-white ml-4 mt-3">Copyrights @{year}</p>
            </div>
        </div> 
    );
}

export default Footer