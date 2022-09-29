import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

  const NavbarTools = <>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/about'>about</Link></li>
    <li><Link to='/service'>service</Link></li>
    <li><Link to='/contact'>contact</Link></li>
  </>
  return (
    <div className="navbar ">
      <div className="navbar-start">
      <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
            {NavbarTools}
          </ul>
        </div>

      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {NavbarTools}
        </ul>
      </div>
    </div>
  );
};

export default Navber;