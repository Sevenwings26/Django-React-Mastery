import React, { useState } from 'react'
import arcade from "../assets/img/arcade.png"
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import "../styles/styles.css"

const Nav = () => {

  const Links = [
    {name:"HOME", link:"/"},
    {name:"BLOG", link:"/"},
    {name:"GALLERY", link:"/"},
    {name:"ABOUT", link:"/"},
    {name:"DESIGNERS", link:"/"},
    {name:"LOGIN", link:"/"},
  ]

  let [ open, setOpen ] = useState(false);
  
  return (
    <div className='shadow-md w-full fixed top-0 left-0 border nav__fontsize'>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className='cursor-pointer flex items-center' style={{width:'10rem'}}>
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
            <span>
              <img src={arcade} alt="" className="brand" style={{width:"100%"}} />
            </span>
        </div>

      {/* Menu icon */}
      <div onClick={()=>setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
        {
          open ? <XMarkIcon/> : < Bars3BottomRightIcon/>
        }
      </div>
        {/* link items */}
        <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'} `}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7'>
                  <a href={link.link} 
                    className=' hover:text-gray-400 duration-500' >
                      {link.name}
                      </a>
              </li>))
          }
          <button className='btn bg-gray-900 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>SIGN UP</button>
        </ul>
      </div>
    </div>
  )
}

export default Nav;