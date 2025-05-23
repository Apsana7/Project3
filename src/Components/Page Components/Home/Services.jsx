import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoCopySharp } from "react-icons/io5";
import { RiPaintBrushLine } from "react-icons/ri";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaLaptopFile } from "react-icons/fa6";

function Services() {
    const data = [
        {
            icon:<FaLaptop />,
            title:"Web Design",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        },
         {
            icon:<FaCartPlus />,
            title:"eCommerce",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        },
         {
            icon:<IoCopySharp />,
            title:"Web Applications",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        },
         {
            icon:<RiPaintBrushLine />,
            title:"Branding",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        },
         {
            icon:<IoExtensionPuzzleSharp />,
            title:"Copy Writing",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        },
         {
            icon:<FaLaptopFile />,
            title:"Mobile Applications",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
            button:"Learn More"
        }
    ]
  return (
    <div className='w-full h-fit py-8 bg-white flex items-center justify-center'>
      <div className='flex flex-col mx-auto w-full sm:w-11/12 md:w-10/12  lg:w-9/12 items-center justify-center gap-12'>
        <div className='text-5xl font-medium'>Our Services</div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6'>
            {
                data.map((val,i)=>{
                    return(
                        <div key={i} className='flex flex-col sm:flex-row justify-center gap-6 p-2'>
                            <div className='text-teal-500 lg:text-5xl sm:text-4xl text-3xl'>{val.icon}</div>
                            <div className='flex flex-col gap-4'>
                                <div className='text-2xl text-gray-700'>{val.title}</div>
                                <div className='text-gray-700 font-light'>{val.description}</div>
                                <div className='text-teal-500 underline'>{val.button}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Services
