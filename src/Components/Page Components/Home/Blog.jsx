import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import image1 from '../../../assets/LP3.webp'
import image2 from '../../../assets/LP4.webp'
import image3 from '../../../assets/LP3.webp'


function Blogs() {
  const images = [
    {
      image: image1,
      Title: 'Create Beautiful Website In Less Than An Hour',
      date: 'Sept 6, 2019 Admin',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      Button: 'Continue Reading',
    },
    {
      image: image2,
       Title: 'Create Beautiful Website In Less Than An Hour',
      date: 'Sept 6, 2019 Admin',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      Button: 'Continue Reading',
    },
    {
      image: image3,
      Title: 'Create Beautiful Website In Less Than An Hour',
      date: 'Sept 6, 2019 Admin',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
      Button: 'Continue Reading',
    },
  ];

  return (
    <div className="flex flex-col bg-white items-center justify-center h-auto py-16">
   
     <div className='text-5xl font-semibold'>Blogs</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 w-11/12 md:w-3/4 mx-auto">
        {images.map((val, i) => {
          return (
            <div key={i} className="flex flex-col gap-4 hover:bg-white cursor-pointer group transition-all duration-700 delay-75 ease-in-out p-4 hover:shadow-lg hover:rounded-lg">
              <div className='h-80 overflow-clip w-full rounded-lg'>
                <img 
                  src={val.image} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:rotate-3 delay-75 group-hover:scale-110" 
                  alt="Blog Thumbnail" 
                />
              </div>
              <div className='text-xl text-teal-400'>{val.Title}</div>
              <div className="text-sm text-gray-500">{val.date}</div>
              <div className="text-gray-700 font-light">{val.description}</div>
              <button className="flex justify-between items-center text-teal-400">
                {val.Button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;

