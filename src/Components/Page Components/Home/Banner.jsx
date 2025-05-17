import React from 'react';
import Typewriter from 'typewriter-effect';

function Banner() {
  return (
    <div className="w-full h-lvh flex items-center justify-center">
      <div className="text-center text-white w-full flex flex-col gap-12 items-center justify-center">

        <div className=' w-2/3 flex flex-col gap-6 mt-30'>
          <div className="text-5xl flex gap-4 items-center justify-center font-semibold   ">
            <span className=''>We love to Build </span>
            <span>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Mobile Apps')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('WordPress')
                    .pauseFor(1500)
                    .deleteAll()

                    .start();
                }}
              />
            </span>
           
          </div>
          <div className="text-xl">Free Web template by</div>
        </div>

        <button className='w-fit h-fit px-3 cursor-pointer text-black py-4 rounded-2xl bg-blue-400 hover:bg-blue-600 hover:text-white'>watch video</button>
      </div>
    </div>
  );
}

export default Banner;

