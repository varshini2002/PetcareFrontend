import React from 'react';
import { useRef, useEffect } from "react";

function handleChange(event) {
    event.preventDefault();
    if(document.getElementById('password').value==="" || document.getElementById('email').value==="")
    {
        alert("email and password cannot be empty");
    }
    else {
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        console.log(email, password);
    }
}

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

function SignInDialog() {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div  className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div ref={wrapperRef} className="bg-white p-8 rounded-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                <form className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="/forgotpassword" className="Text-color font-semibold pr-40">Forgot Password?</a>
                        <button onClick={(e) => handleChange(e)} className="Bg-color text-white px-6 py-2 rounded-md">Sign In</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm">Don't have an account?</p>
                    <a href="/signup" className="Text-color font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default SignInDialog;