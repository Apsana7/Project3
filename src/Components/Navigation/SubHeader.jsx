import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function SubHeader() {
  return (
    <div className='py-3 inset-0 bg-black opacity-80 object-cover '>
      <div className='mx-auto flex w-10/12 items-center justify-between text-sm text-white gap-4'>
        
            <div className='flex  gap-4'>
                <div className='flex gap-1'>
                    <div>Phone:</div>
                    <div className='text-[#32DBC6]'>+1236459878</div>
                </div>
                <div className='flex gap-1'>
                    <div>Email:</div>
                    <div className='text-[#32DBC6]'>info@yourdomain.com</div>
                </div>
            </div>
            <div className='flex gap-6 text-[#32DBC6]'>
                <div><FaFacebook /></div>
                <div><FaTwitter /></div>
                <div><FaInstagram /></div>
                <div><FaLinkedinIn /></div>
            </div>
      
     

     </div>
    </div>
  )
}

export default SubHeader
