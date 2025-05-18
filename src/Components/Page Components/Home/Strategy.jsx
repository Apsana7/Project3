import React from 'react'
import coffee4 from '../../../assets/coffee4.jpg'

import { FaUmbrellaBeach } from "react-icons/fa";
import { RiPaintBrushFill } from "react-icons/ri";
import { TbTool } from "react-icons/tb";
import { MdFileCopy } from "react-icons/md";

function Strategy() {
    const data = [
        {
            icon:<FaUmbrellaBeach />,
            title:"strategy",
            Description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button:"Read More"
        },
         {
            icon:<RiPaintBrushFill />,
            title:"Art Direction",
            Description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button:"Read More"
        },
         {
            icon:<TbTool />,
            title:"Web Development",
            Description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button:"Read More"
        },
         {
            icon:<MdFileCopy />,
            title:"Copywriting",
            Description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button:"Read More"
        },

    ]
  return (
    <div className='w-full h-lvh flex items-center justify-center bg-white'>
        <div className='w-9/12 flex mx-auto bg-black p-10 h-2/3 '>
            <div className='grid grid-cols-2 gap-6 items-center'>
                <img src={coffee4} alt="image" className=' w-10/12 h-96 object-cover' />
                <div className='flex text-white items-center justify-center '>
                    <div className='grid grid-cols-2 gap-x-8 gap-y-12 items-center justify-center '>
                      {
                        data.map((val,i)=>{
                            return(
                                <div key={i} className=' flex flex-col gap-3 '>
                                    <div className='flex items-center gap-4'>
                                      <div className='text-2xl'>{val.icon}</div>
                                      <div className='text-xl'>{val.title}</div>
                                    </div>
                                    <div className='font-light text-gray-500 text-lg'>{val.Description}</div>
                                    <div className='underline cursor-pointer text-lg'>{val.button}</div>
                                </div>
                            )
                        })
                      } 

                        
                       
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Strategy
