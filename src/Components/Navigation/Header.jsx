import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const Page = [
    { title: "Home", path: "home" },
    { title: "Work", path: "work" },
    { title: "Services", path: "services" },
    { title: "About", path: "about" },
    { title: "Blog", path: "blog" },
    { title: "Contact", path: "contact" }
  ];

  return (
    <header className='sticky z-10 top-0 w-full bg-white shadow-md'>
      <div className='mx-auto flex w-10/12 items-center justify-between h-20'>
       
        <div className='text-3xl font-medium font-Comfortaa'>CrackIt.</div>

   
        <nav className='hidden md:flex gap-10 font-medium'>
          {Page.map((val, i) => (
            <Link
              key={i}
              to={val.path}
              className={`cursor-pointer transition-colors duration-200 ${
                location.pathname === val.path ? 'text-teal-500' : 'text-gray-800'
              }`}
            >
              {val.title}
            </Link>
          ))}
        </nav>

     
        <button
          className='md:hidden text-3xl text-gray-800'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>


      {isOpen && (
        <nav className='md:hidden flex flex-col items-center gap-4 pb-6 font-medium'>
          {Page.map((val, i) => (
            <Link
              key={i}
              smooth={true}
              duration={500}
              to={val.path}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer text-lg transition-colors duration-200 ${
                location.pathname === val.path ? 'text-teal-500' : 'text-gray-800'
              }`}
            >
              {val.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

