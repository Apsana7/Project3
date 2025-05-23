import React from 'react'
import image1 from '../../../assets/LP9.webp'
import image2 from '../../../assets/LP10.webp'
import image3 from '../../../assets/LP11.webp'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";


function Team() {
  const data = [
    {
      image:image1,
      name:"John Rooster",
      position:"CO-FOUNDER PRESIDENT",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
      {
      image:image2,
      name:"John Rooster",
      position:"CO-FOUNDER PRESIDENT",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
     {
      image:image3,
      name:"John Rooster",
      position:"CO-FOUNDER PRESIDENT",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
  ];
 
   const icons = [
     { icon: <FaFacebook />, url: "https://facebook.com" },
     { icon: <FaTwitter />, url: "https://twitter.com" },
     { icon: <FaInstagram />, url: "https://instagram.com" },
     { icon: <FaLinkedinIn />, url: "https://linkedin.com" }
   ];

  return (
    <div className='bg-white h-full  flex flex-col items-center justify-start lg:py-20 py-16'>
      <div className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-8 items-center'>
      
     
         <div className='text-4xl font-semibold'>Our Team</div>

      
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full '>
          {data.map((val, i) => (
            <div 
              key={i} 
              className='flex flex-col items-center justify-center p-6 bg-white  rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer'
            >
              <img src={val.image} alt="" className='w-44 h-44 rounded-full object-cover' />
              <div className='text-2xl font-semibold mt-4 text-center'>{val.name}</div>
              <div className='text-gray-400 mt-4  text-sm text-center'>{val.position}</div>

              <div className='text-lg text-gray-500 mt-4 text-center'>{val.description}</div>
              <div className='flex gap-3 mt-4 text-gray-500'>
                {
                  icons.map((value,index)=>{
                    return(
                      <div key={index} className='bg-gray-500 text-white rounded-full p-2'>
                          {value.icon}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
