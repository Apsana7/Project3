import React from 'react'
import image from '../../../assets/LP2.webp'
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaLaptopFile } from "react-icons/fa6";

function AboutUs() {
  return (
    <div className='w-full min-h-screen bg-white flex items-center justify-center'>
      <div className='w-11/12 max-w-7xl flex mx-auto p-4 md:p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
          <div className='flex flex-col gap-12 p-2 md:p-6'>
            <div className='text-4xl md:text-5xl font-semibold'>About Us</div>
            <div className='font-light text-justify md:text-xl text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.
            </div>
            <div className='flex flex-col sm:flex-row gap-12'>
              <div className='flex flex-col gap-3'>
                <div className='text-4xl md:text-5xl text-gray-500'><FaLaptopFile /></div>
                <div className='text-md md:text-lg text-gray-600 text-justify'>Web & Mobile Specialties</div>
                <div className='font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</div>
                <div className='text-teal-300 text-lg cursor-pointer'>Learn more</div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='text-4xl md:text-5xl text-gray-500'><IoExtensionPuzzleSharp /></div>
                <div className='text-md md:text-lg text-gray-600 text-justify'>Intuitive Thinkers</div>
                <div className='font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</div>
                <div className='text-teal-300 text-lg cursor-pointer'>Learn more</div>
              </div>
            </div>
          </div>
          <img src={image} alt="" className='w-full h-auto object-cover rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
