import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="flex items-center text-xl gap-4 p-5 md:px-16 md:py-10 max-h-20 overflow-hidden text-white bg-[#13212e]">
      <Link to="/" className="w-32 max-w-42 md:w-44 cursor-pointer">
        <img
          className="w-full h-auto"
          src="/images/create-a-only-signature-logo-for-cristian-g-with-o-8fnyIRY8Tm2ccIm7BoIjVQ-TYtgW7dISaCtLUAXXsTt6w.jpeg"
          alt="logo"
        />
      </Link>

      <button onClick={showNavbar} className="md:hidden ms-auto flex flex-col">
        <FaBars size={24} />
      </button>

      {/* Menú desplegable */}
      <div
        className={`md:hidden absolute top-16 right-0 w-full items-end h-52 flex flex-col justify-between z-10 bg-[#13212e] bg-opacity-75 p-5 transition-transform duration-300 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="block hover:text-teal-400">
          Home
        </Link>
        <Link to="/about" className="block hover:text-teal-400">
          About
        </Link>
        <Link to="/commissions" className="block hover:text-teal-400">
          Commissions
        </Link>
      </div>

      {/* Para pantallas más grandes */}
      <div className={`md:flex ms-auto gap-3 hidden `}>
        <Link to="/">
          <h1 className="hover:text-teal-400 hover:text-2xl">Home</h1>
        </Link>
        <Link to="/about">
          <h1 className="hover:text-teal-400 hover:text-2xl">About</h1>
        </Link>
        <Link to="/commissions">
          <h1 className="hover:text-teal-400 hover:text-2xl">Commissions</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
