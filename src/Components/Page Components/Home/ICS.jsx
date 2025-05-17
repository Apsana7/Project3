import React from 'react';
import { MdDone } from "react-icons/md";

function ICS() {
  const data = [
    {
      id: "01",
      title: "Innovate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
      points: ["Customer Experience", "Product Management", "Proof of Concept"],
    },
    {
      id: "02",
      title: "Create",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
      points: ["Web Design", "Branding", "Web & App Development"],
    },
    {
      id: "03",
      title: "Scale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
      points: ["Social Media", "Paid Campaigns", "Marketing & SEO"],
    },
  ];

  return (
    <div className='w-full bg-white h-[600px] flex items-center justify-center'>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
        {data.map((val, index) => (
          <div key={index} className='relative h-96 flex flex-col justify-center gap-6 p-6'>
           
            <div className='absolute top-2 left-2 text-9xl font-bold text-gray-100 z-0'>
              {val.id}
            </div>

          
            <div className='absolute inset-0 mt-10 flex flex-col gap-4'>
              <div className='text-[#32DBC6] text-4xl font-semibold'>{val.title}</div>
              <div className='text-gray-700'>{val.description}</div>

              <div className='flex flex-col gap-2'>
                {val.points.map((value, idx) => (
                  <div key={idx} className='flex items-center gap-3 text-gray-800'>
                    <span className='text-[#32DBC6] text-xl'>
                      <MdDone />
                    </span>
                    {value}
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ICS;
