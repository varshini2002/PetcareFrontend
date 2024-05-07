import React from "react";
import '../App.css';

var date=new Date();
var year = date.getFullYear();

function Footer() {
    return (
        <div className="bottom-0 z-50 w-full h-16 bg-gray-800 Footer">
            <div className=" flex items-center justify-center h-full">
              <p className="text-center text-white w-full">Copyrights @{year}</p>
            </div>
        </div> 
    );
}

export default Footer