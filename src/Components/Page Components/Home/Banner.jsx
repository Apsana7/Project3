import React from 'react';
import Typewriter from 'typewriter-effect';

function Banner() {
  return (
    <div className='relative'>
      <div className="relative h-screen w-full mx-auto flex items-center justify-center">


        <div className="absolute inset-0 flex flex-col bg-black/20 gap-4 items-center justify-center  text-center text-black px-4">

          <div className="text-center text-white w-full max-w-4xl flex flex-col gap-10 items-center justify-center py-10">

            <div className="w-full flex flex-col gap-6 mt-20">
              <div className="text-3xl sm:text-4xl md:text-5xl flex flex-wrap gap-2 items-center justify-center font-semibold">
                <span>We love to Build</span>
                <span>
                  <Typewriter
                    options={{
                      loop: true,
                      autoStart: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Mobile Apps')
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
              <div className="text-base sm:text-lg text-gray-100">Free Web template by <span className='text-teal-600'>Colorlib</span></div>
            </div>

            <div className="px-6 py-3 rounded-2xl bg-teal-500 text-white cursor-pointer hover:bg-teal-700 hover:text-white transition-all duration-300 text-sm sm:text-base">
              Watch Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
