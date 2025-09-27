

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform">
          IELTS Pro
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {["Home", "Features", "Testimonials", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="hover:text-yellow-300 hover:scale-110 transition transform cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <HiX size={28} className="text-white" />
            ) : (
              <HiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-indigo-700 text-white flex flex-col space-y-4 px-6 py-4 animate-fade-in">
          {["Home", "Features", "Testimonials", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="hover:text-yellow-300 transition transform cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
