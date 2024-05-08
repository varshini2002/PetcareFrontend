import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn.js';
import SignUp from './Pages/SignUp.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import Dashboard from './Pages/Dashboard.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
