import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo/Logo.png';
import uparrow from '../../public/Servicios/uparrow.svg'

const navlinks = [
  {
    title: 'Inicio',
    link: '#',
  },
  {
    title: 'Servicios',
    link: '#servicios',
  },
  {
    title: 'Contacto',
    link: '#contacto',
  },
  {
    title: 'Nosotros',
    link: '#nosotros',
  },
  {
    title: 'Clientes',
    link: '#clientes',
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-black relative top-0 z-50'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center justify-center'>
            <a href='/' className='text-white font-semibold'>
              <img src={Logo} alt='Logo' className='h-8 ml-6' />
              No me Pagan
            </a>
          </div>
          {/*NAVLINKS*/}
          <div className='-mr-2 flex-grow md:flex md:items-center md:justify-center'>
            <div className='hidden md:block'>
              <div className='nl-10 flex items-baseline space-x-4'>
                {navlinks.map((link, index) => (
                  <a
                    key={index}
                    className='text-gray-300 transition-all duration-500 hover:text-blue-600 px-3 py-2 rounded-md text-md font-semibold'
                    href={link.link}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/*Burgir-button*/}
          <div className='-mr-2 flex md:hidden'>
            <button
              type='button'
              onClick={handleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md
               text-gray-400 hover:text-white hover:bg-gray-700 animate-pulse'
            >
              <span className='sr-only'>Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/*Menu Mobile*/}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${open ? 'block' : 'hidden'}`}>
        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <div className='flex flex-col items-center'>
            {navlinks.map((link, index) => (
              <a
                key={index}
                className='text-gray-300 hover:text-blue-600 transition duration-500 hover:scale-110 hover:-translate-y-1 ease-in-out
                block px-3 py-2 rounded-md text-base font-medium'
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Button to top */}
      {isVisible && (
        <button
          className='fixed bottom-6 right-6 bg-gray-500 hover:bg-gray-700 transition-all duration-500 text-white font-bold 
          py-3.5 px-3.5 rounded-full animate-bounce'
          onClick={scrollToTop}
        >
          <img src={uparrow} alt='To top' className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default NavBar;
