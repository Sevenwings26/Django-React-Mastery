import React, { useState } from 'react';
import arcade from "../assets/img/arcade.png";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "BLOG", link: "/blog" },
    { name: "GALLERY", link: "/gallery" },
    { name: "ABOUT", link: "/about" },
    { name: "DESIGNERS", link: "/designers" },
  //   { name: "LOGIN", link: "/login" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className=''>
    <div className='shadow-md w-full border nav__fontsize'>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className='cursor-pointer flex items-center' style={{ width: '10rem' }}>
          <span>
            <img src={arcade} alt="Brand Logo" className="brand" style={{ width: "100%" }} />
          </span>
        </div>

        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
              <Link to={link.link} className='hover:text-gray-400 duration-500'>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="home__buttons">
            <Link to="/login" className='btn bg-gray-900 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>LOGIN</Link>
            
            <Link to="/register" className='btn bg-gray-900 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>SIGN UP</Link>
          </div>
        </ul>
      </div>
    </div>
    </nav>

  );
};

export default Nav;



