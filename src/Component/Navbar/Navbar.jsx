import React from "react";
import logo from '../../assets/logo.png'

function Navbar() {
    
  return (
    <div className="navbar bg-white  px-6 w-[1200px] mx-auto">
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo} // replace with your logo path
            alt="Logo"
            className="w-15 "
          />
          
        </a>
      </div>

      {/* Center: Menu Items */}
      <div className="hidden md:flex space-x-6 mr-3">
        <a href="/" className="hover:text-primary sora">Home</a>
        <a href="/fixture" className="hover:text-primary sora">Fixture</a>
        <a href="/teams" className="hover:text-primary sora">Teams</a>
        <a href="/schedules" className="hover:text-primary sora">Schedules</a>
      </div>

      {/* Right: Coin Button */}
      <div className="flex-none">
        <button className="btn btn-outline btn-{#131313}">
          <span>0</span><span> Coin </span><span className="ml-1">🪙</span>
        </button>
      </div>

      {/* Mobile Menu (optional) */}
      <div className="md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
