import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUpDialog() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidForm = () => {
    const { email, firstName, lastName, password, confirmPassword } = formData;
    return email && firstName && lastName && password && confirmPassword && isValidEmail(email) && password === confirmPassword;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        if (isValidForm()) {
          handleSubmit(event);
        } else {
          setErrorMessage("Please fill in all the required fields correctly.");
          setOpenSnackbar(true);
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      setErrorMessage("Please fill in all the required fields correctly.");
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.post('http://3.110.197.17:8090/api/v1/auth/signup', {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password
      });

      if (response.status === 200) {
        setSuccessMessage("Sign up successful! Please check your email for the OTP.");
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/verifyEmail', { state: { email: formData.email } });
        }, 2000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.responseMessage || "An error occurred");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-2/6">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <div className="flex flex-row">
            <div className="mb-4 pr-2 w-full">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4 pl-2 w-full">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="bg-gray-600 text-white px-6 py-2 rounded-md w-full">
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">Already have an account?</p>
          <a href="/signin" className="text-gray-600 font-semibold">
            Sign In
          </a>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage || successMessage}
      />
    </div>
  );
}

export default SignUpDialog;
