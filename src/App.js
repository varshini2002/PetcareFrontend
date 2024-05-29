import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import SignIn from './Pages/SignIn.js';
import SignUp from './Pages/SignUp.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import VerifyEmail from './Components/VerifyEmail.js';
// import ChangePassword from './components/ChangePassword';
import Dashboard from './Pages/Dashboard.js';
import AddPetPage from './Pages/AddPetPage.js';
import ViewPetsPage from './Pages/ViewPetsPage.js';
import BookingAppointmentPage from './Pages/BookingAppointmentPage.js';
import ViewAppointmentPage from './Pages/ViewAppointmentPage.js';
import EditPetPage from './Pages/EditPetPage.js';
import ManageProfilePage from './Pages/ManageProfilePage.js';
import ResetPasswordPage from './Pages/ResetPasswordPage.js';
import ViewBillPage from './Pages/viewBillPage.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* <Route path="/changePassword" component={ChangePassword} /> */}
          <Route path="/verifyEmail" element={<VerifyEmail/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addpet" element={<AddPetPage />} />
          <Route path="/viewpets" element={<ViewPetsPage />} />
          <Route path="/bookslots" element={<BookingAppointmentPage />} />
          <Route path="/viewbookings" element={<ViewAppointmentPage />} />
          <Route path="/editpet" element={<EditPetPage />} />
          <Route path="/manageprofile" element={<ManageProfilePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/bill" element={<ViewBillPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
