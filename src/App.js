import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
