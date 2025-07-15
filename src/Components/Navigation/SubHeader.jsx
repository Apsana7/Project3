import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function SubHeader() {
  return (
    <div className='flex py-2 bg-gray-800 text-white'>
      <div className='mx-auto w-10/12 flex flex-col md:flex-row items-center justify-between gap-2 text-sm'>

        
        <div className='flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left'>
          <div className='flex gap-1 items-center'>
            <span>Phone:</span>
            <span className='text-[#32DBC6]'>+1236459878</span>
          </div>
          <div className='flex gap-1 items-center'>
            <span>Email:</span>
            <span className='text-[#32DBC6]'>info@yourdomain.com</span>
          </div>
        </div>

      
        <div className='flex gap-4 text-[#32DBC6] text-lg'>
          <FaFacebook className='cursor-pointer hover:text-white transition-colors' />
          <FaTwitter className='cursor-pointer hover:text-white transition-colors' />
          <FaInstagram className='cursor-pointer hover:text-white transition-colors' />
          <FaLinkedinIn className='cursor-pointer hover:text-white transition-colors' />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
