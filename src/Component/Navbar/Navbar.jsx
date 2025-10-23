import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Navbar({availableBallance}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar z-10 sticky top-0 bg-white px-6 py-4 w-full max-w-[1200px] mx-auto flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-16" />
        </a>
      </div>

      {/* Center: Menu Items (Desktop) */}
      <div className="hidden md:flex space-x-6 mr-3">
        <a href="/" className="hover:text-primary sora font-semibold">Home</a>
        <a href="/fixture" className="hover:text-primary sora font-semibold">Fixture</a>
        <a href="/teams" className="hover:text-primary sora font-semibold">Teams</a>
        <a href="/schedules" className="hover:text-primary sora font-semibold">Schedules</a>
      </div>

      {/* Right: Coin Button */}
      <div className="hidden md:flex flex-none">
        <button className=" text-black">
          <span className="font-semibold">${availableBallance}</span>
          <span className="font-semibold"> Coin </span>
          <span className="ml-1">🪙</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
          <a href="/" className="py-2 w-full text-center hover:text-primary sora">Home</a>
          <a href="/fixture" className="py-2 w-full text-center hover:text-primary sora">Fixture</a>
          <a href="/teams" className="py-2 w-full text-center hover:text-primary sora">Teams</a>
          <a href="/schedules" className="py-2 w-full text-center hover:text-primary sora">Schedules</a>
          <button className="btn btn-outline mt-3">
            <span>0</span>
            <span> Coin </span>
            <span className="ml-1">🪙</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
