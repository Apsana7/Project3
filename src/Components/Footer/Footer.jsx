import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

function Footer() {
  const features = [
    { title: "About Us", path: '/About' },
    { title: "Services", path: '/Services' },
    { title: "Testimonials", path: '/Testimonial' },
    { title: "Contact Us", path: '/ContactUs' }
  ];

  const icons = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" }
  ];

  return (
    <footer className='w-full bg-black text-white py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10'>
          
       
          <div>
            <h3 className='text-lg font-semibold mb-3'>About Us</h3>
            <p className='text-sm text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem.
            </p>
          </div>

    
          <div className=' flex flex-col items-center'>
            <h3 className='text-lg font-semibold mb-3'>Features</h3>
            <div className='space-y-2'>
              {features.map((item, index) => (
                <div key={index}>
                  <Link to={item.path} className='text-sm text-gray-300 hover:text-white transition'>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
            <div className='flex gap-4'>
              {icons.map((item, index) => (
                <a
                  key={index} className='text-xl hover:text-teal-400 transition'
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className='text-lg font-semibold mb-3'>Subscribe to Newsletter</h3>
            <div className='flex items-center gap-2'>
              <input
                type="email"
                placeholder='Enter your email'
                className='w-full px-4 py-2  rounded-xl border-2 border-gray-700'
              />
              <button className='px-4 py-2 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition'>
                Send
              </button>
            </div>
          </div>

        </div>

     
        <div className='text-center text-sm text-gray-500 mt-6 flex gap-2 items-center justify-center'>
           2025 All rights reserved | Template made with <span><FcLike /></span> by Apsana
        </div>
      </div>
    </footer>
  );
}

export default Footer;
