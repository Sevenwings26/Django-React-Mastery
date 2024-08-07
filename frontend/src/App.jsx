import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./components/Nav";
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ResetPassword from './pages/ResetPassword';
import ActivationPage from './pages/ActivationPage';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={< RegisterPage />} />
          <Route path='/account_activation' element={<ActivationPage/>} />
          <Route path="/reset_password" element={<ResetPassword />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;


