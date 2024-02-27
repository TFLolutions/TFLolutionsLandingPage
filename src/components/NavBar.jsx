import React from "react";
import Logo from './Logo/Logo.png'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 scroll-py-1">
      <div className="flex items-center">
        <a href="#"className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-auto mr-1"
        />
        <span className="text-xl font-semibold text-white">No Me Pagan</span>
        </a>
      </div>
      <ul className="flex justify-end flex-1 mr-10">
        <li>
          <a
            href="#inicio"
            className="block text-white px-2 py-1 rounded hover:bg-black hover:duration-500 "
          >
            Inicio  
          </a>
        </li>
        <span className="text-white mx-2 mt-1 mb-1">|</span>
        <li>
          <a
            href="#servicios"
            className="block text-white px-2 py-1 rounded hover:bg-black hover:duration-500"
          >
            Servicios 
          </a>
        </li>
        <span className="text-white mx-2 mt-1 mb-1">|</span>
        <li>
        <a
            href="#nosotros"
            className="block text-white px-2 py-1 rounded hover:bg-black hover:duration-500"
          >
            Nosotros 
          </a>
          </li>
          <span className="text-white mx-2 mt-1 mb-1">|</span>
          <li>
          <a
            href="#clientes"
            className="block text-white px-2 py-1 rounded hover:bg-black hover:duration-500"
          >
            Clientes 
          </a>
          </li>
      </ul>
      <div className="menu flex flex-col justify-between items-center">
        <span className="h-1 w-full bg-white rounded mb-1"></span>
        <span className="h-1 w-full bg-white rounded mb-1"></span>
        <span className="h-1 w-full bg-white rounded mb-1"></span>
      </div>
    </nav>
  );
};

export default NavBar;
