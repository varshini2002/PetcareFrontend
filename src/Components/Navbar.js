import React from 'react';

function Navbar() {
    return (
        <div className="bg-gray-800 text-white p-4 flex w-full h-16 justify-between items-center rounded-xl my-2">
            <div className="">                
                <a href="#" className="logo no-underline">Logo</a>
                <a href="#" className="name no-underline ml-1 text-white font-bold text-2xl ">PetCare.</a>
            </div>
            <div className="">                
                <a href="#" className="bg-gray-500 rounded-lg px-3 py-2 text-white no-underline">Register</a>
                <a href="signin" className="bg-gray-500 rounded-lg px-3 py-2 text-white no-underline ml-2">Sign In</a>
            </div>
        </div>
    );
  }
  
  export default Navbar;