import React from 'react';
import { useRef, useEffect } from "react";

function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            window.location.href = "/";
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
       
      document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

function SignUpDialog() {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div ref={wrapperRef} className="bg-white p-8 rounded-lg w-2/6">
                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                <form className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className='flex flex-row'>
                        <div className="mb-4 pr-2 w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" id="firstname" name="firstname" className="mt-1 px-4 py-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4 pl-2 w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="lastname" name="lastname" className="mt-1 px-4 py-2 w-full border rounded-md" />
                        </div>
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <button type="submit" className="Bg-color text-white px-6 py-2 rounded-md w-full">Sign Up</button>
                </form>
                <div className="text-center">
                    <p className="text-sm">Already have an account?</p>
                    <a href="/signin" className="Text-color font-semibold">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default SignUpDialog;