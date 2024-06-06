import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    console.log(email, newPassword);
    try {
      const response = await axios.put("http://3.110.197.17:8090/api/v1/auth/resetPassword", {
        email: email,
        newPassword: newPassword
      });

      if (response.status === 200) {
        setSuccessMessage("Password updated successfully.");
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/signin");
        }, 3000); // Navigate after 3 seconds
      } else {
        throw new Error("Failed to update password.");
      }
    } catch (error) {
      setErrorMessage("Failed to update password. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-1/3 mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Update Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-semibold">
              Enter New Password:
            </label>
            <input
              type="password"
              className="form-control mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block text-sm font-semibold">
              Confirm New Password:
            </label>
            <input
              type="password"
              className="form-control mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button type="submit" className=" bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900">
            Update Password
          </button>
        </form>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity={successMessage ? "success" : "error"}>
          {successMessage || errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ResetPassword;
