import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';

function SignInDialog() {
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
   
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
      };
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      axios.post('http://65.0.4.44:8090/api/v1/auth/login', { email, password })
        .then(response => {
          const { statusCode, responseMessage, token } = response.data;
          if (statusCode === 200) {
            Cookies.set('token', token);
            console.log(token);
            navigate("/dashboard");
          } else {
            setLoginMessage(responseMessage);
          }
        })
        .catch(error => {
          setErrorMessage('Incorrect email or password');
          setOpenSnackbar(true);
        });
    };

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
   
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
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
              </form>
              <div className="flex justify-between items-center">
                    <a href="/forgotpassword" className="Text-color font-semibold pr-40">Forgot Password?</a>
                  <button onClick={handleSubmit} className=" text-white bg-gray-700  px-2 py-2 rounded-md">Sign In</button>
                  {loginMessage && <p className="text-red-500">{loginMessage}</p>}
              </div>
              <div className="text-center">
                    <p className="text-sm mb-0 mt-2">Don't have an account?</p>
                    <a href="/signup" className="Text-color font-semibold">Sign Up</a>
                </div>
          </div>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={errorMessage}
          />
      </div>
    );
}

export default SignInDialog;
