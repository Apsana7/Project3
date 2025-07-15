import React from 'react'
import image1 from '../../../assets/LP3.webp'
import image2 from '../../../assets/LP4.webp'
import image3 from '../../../assets/LP5.webp'
import image4 from '../../../assets/LP6.webp'
import image5 from '../../../assets/LP7.webp'
import image6 from '../../../assets/LP8.webp'

function OurWorks() {
    const images = [
        {
            image: image1,
            title: "Bonzai Tree",
            subtitle: "WEB APPLICATION"
        },
        {
            image: image2,
            title: "Simple Woman",
            subtitle: "BRANDING"
        },
        {
            image: image3,
            title: "Fruits",
            subtitle: "WEBSITE"
        },
        {
            image: image4,
            title: "Design Material",
            subtitle: "WEB APPLICATION"
        },
        {
            image: image5,
            title: "Handy Food",
            subtitle: "BRANDING"
        },
        {
            image: image6,
            title: "Cat With Cup",
            subtitle: "WEBSITE"
        }
    ]

    return (
        <div className='bg-gray-50 w-full h-full flex items-center justify-center'>
            <div className='w-full mx-6 flex flex-col items-center justify-center py-16'>
            
                <div className='flex flex-col gap-6 items-center'>
                    <div className='text-5xl font-medium'>Our Works</div>
                    <div className='font-light text-lg w-3/4 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.
                    </div>
                </div>

             
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10  '>
                    {images.map((val, i) => (
                        <div key={i} className='relative group overflow-hidden rounded-xl shadow-lg w-full aspect-square  '>
                            <img
                                src={val.image}
                                alt={val.title}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                           
                            <div className='absolute inset-0 bg-black flex flex-col bg-opacity-40 items-center justify-center opacity-0 group-hover:opacity-40  transition-all duration-300'>
                                <h3 className='text-white text-2xl font-bold'>{val.title}</h3>
                                <p className='text-gray-200 text-sm mt-2 tracking-widest uppercase'>{val.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurWorks
