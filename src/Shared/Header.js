import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Header = () => {
    const menuItems=<>
    <Link to='/home'> Home</Link>
    <Link to='/login'> Log in</Link>
    <Link to='/signUp'>SignUp</Link>
    </>
    return (
        <div className="navbar h-5 p-10  pt-13 mb-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
             
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
             {menuItems}
             
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal p-15 px-10">
            {menuItems}
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Header;