import React from 'react'
import coffee4 from '../../../assets/LP2.webp'

import { FaUmbrellaBeach } from "react-icons/fa";
import { RiPaintBrushFill } from "react-icons/ri";
import { TbTool } from "react-icons/tb";
import { MdFileCopy } from "react-icons/md";

function Strategy() {
    const data = [
        {
            icon: <FaUmbrellaBeach />,
            title: "strategy",
            Description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button: "Read More"
        },
        {
            icon: <RiPaintBrushFill />,
            title: "Art Direction",
            Description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button: "Read More"
        },
        {
            icon: <TbTool />,
            title: "Web Development",
            Description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button: "Read More"
        },
        {
            icon: <MdFileCopy />,
            title: "Copywriting",
            Description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt",
            button: "Read More"
        },

    ]
    return (
        <div className='w-full h-full flex items-center justify-center bg-gray-100 py-12'>
            <div className='w-11/12 md:w-10/12 flex flex-col md:flex-row mx-auto bg-black p-4 md:p-10 h-auto md:h-8/12 rounded-lg shadow-lg'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4    items-center'>
                    <img src={coffee4} alt="image" className=' w-full
                     md:w-10/12 h-64 md:h-96 object-cover' />
                    <div className='flex text-white items-start justify-start md:items-center md:justify-center'>

                        <div className='grid grid-cols-2 gap-x-20 gap-y-20 items-center justify-center '>
                            {
                                data.map((val, i) => {
                                    return (
                                        <div key={i} className=' flex flex-col gap-3 '>
                                            <div className='flex items-center gap-4'>
                                                <div className='text-xl md:text-2xl'>{val.icon}</div>
                                                <div className='text-lg md:text-xl'>{val.title}</div>
                                            </div>
                                            <div className='font-light text-gray-300 '>{val.Description}</div>
                                            <div className='underline cursor-pointer text-sm md:text-lg'>{val.button}</div>

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
