// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-200">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
