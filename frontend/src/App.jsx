// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Nav from "./components/Nav";
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <>
//       <Router>
//         {/* <Nav /> */}
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/login' element={<LoginPage />} />
//           <Route path='/register' element={<RegisterPage />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           {/* Add other routes here */}
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
