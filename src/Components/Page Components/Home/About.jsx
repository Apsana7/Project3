import React from 'react'
import image from '../../../assets/beauteI.jpg'
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaLaptopFile } from "react-icons/fa6";

function About() {
  return (
    <div className='w-full h-lvh bg-white flex items-center justify-center'>
        <div className='w-10/12  flex mx-auto p-8'>
            <div className='grid grid-cols-2 gap-10'>
                <div className=' flex flex-col gap-7 p-6'>
                    <div className='text-5xl font-semibold'>About Us</div>
                    <div className='font-light text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-3'>
                            <div className='text-5xl text-gray-500'><FaLaptopFile /></div>
                            <div className='text-lg text-gray-600'>Web & Mobile Specialties</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</div>
                            <div className='text-teal-300'>Learn more</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-5xl text-gray-500'><IoExtensionPuzzleSharp /></div>
                            <div className='text-lg text-gray-600'>Intutive Thinkers</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</div>
                            <div className='text-teal-300'>Learn more</div>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className='h-full object-cover' />

            </div>
        </div>
    
    </div>
  )
}

export default About
