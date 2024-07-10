"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.jpg'; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-black sticky top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" passHref>
            <Image src={logo} alt="" width={50} height={50} />
            <span className="ml-3 text-xl">Microscopeforever</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/components/dynamic/Notes" className="hover:text-lime-600 transition duration-300" onClick={closeMenu}>
            Notes
          </Link>
          <Link href="/components/dynamic/Blogs" className="hover:text-lime-600 transition duration-300" onClick={closeMenu}>
            Blogs
          </Link>
          <Link href="/components/dynamic/Jobs" className="hover:text-lime-600 transition duration-300" onClick={closeMenu}>
            Jobs
          </Link>
          <Link href="/components/static/About" className="hover:text-lime-600 transition duration-300" onClick={closeMenu}>
            About
          </Link>
          <Link href="/components/dynamic/SignupAndLogin" className="hover:text-lime-600 transition duration-300" onClick={closeMenu}>
            Signup/Login
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex flex-col items-center justify-center w-8 h-8"
          >
            <div className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
        <nav
          ref={navbarRef}
          className={`fixed top-0 right-0 w-64 bg-lime-600 md:hidden text-white h-full z-20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0 flex flex-col md:flex-row md:items-center md:space-x-6`}
        >
          <div className="px-4 py-6 md:hidden flex items-center justify-between">
            <button onClick={toggleMenu} className="focus:outline-none w-8 h-8">
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
          <Link href="/components/dynamic/Notes" className="px-4 py-2 hover:bg-lime-700 md:hover:bg-transparent" onClick={closeMenu}>
            Notes
          </Link>
          <Link href="/components/dynamic/Blogs" className="px-4 py-2 hover:bg-lime-700 md:hover:bg-transparent" onClick={closeMenu}>
            Blogs
          </Link>
          <Link href="/components/dynamic/Jobs" className="px-4 py-2 hover:bg-lime-700 md:hover:bg-transparent" onClick={closeMenu}>
            Jobs
          </Link>
          <Link href="/components/static/About" className="px-4 py-2 hover:bg-lime-700 md:hover:bg-transparent" onClick={closeMenu}>
            About
          </Link>
          <Link href="/components/dynamic/SignupAndLogin" className="px-4 py-2 hover:bg-lime-700 md:hover:bg-transparent" onClick={closeMenu}>
            Signup/Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
