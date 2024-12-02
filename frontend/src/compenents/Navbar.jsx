import React, {  useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const{token,setToken, userData} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)
 



  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <h3 onClick={() => navigate('/')} className="text-custom-pink cursor-pointer">ARTEXPRESSION</h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to='/'>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/creators'>
          <li className="py-1">CREATORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/about'>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/gallery'>
          <li className="py-1">GALLERY</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
  
        
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setShowMenu(!showMenu)} className="text-custom-pink">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <NavLink to='/'>
            <li className="py-2 text-center">HOME</li>
          </NavLink>
          <NavLink to='/creators'>
            <li className="py-2 text-center">CREATORS</li>
          </NavLink>
          <NavLink to='/about'>
            <li className="py-2 text-center">ABOUT</li>
          </NavLink>
          <NavLink to='/gallery'>
            <li className="py-2 text-center">GALLERY</li>
          </NavLink>
          {/* Conditional "Upload Art" link in mobile menu */}
          {token && (
            <NavLink to='/upload-art'>
              <li className="py-2 text-center">UPLOAD ART</li>
            </NavLink>
          )}
        </ul>
      )}



      {/* Right Side Menu - Profile & Login Button */}
      <div className="flex items-center gap-4">
        {
          token && userData
            ? <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-0 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate('my-profile')} className="hover:text-custom-pink cursor-pointer" >My profile </p>
                  <p onClick={logout} className="hover:text-custom-pink cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create account</button>
        }
      </div>
    </div>
  );
};

export default Navbar;