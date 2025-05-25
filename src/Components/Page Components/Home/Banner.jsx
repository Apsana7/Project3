import React from 'react';
import Typewriter from 'typewriter-effect';

function Banner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  px-4">
      <div className="text-center text-white w-full max-w-4xl flex flex-col gap-10 items-center justify-center py-10">

        <div className="w-full flex flex-col gap-6">
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
          <div className="text-base sm:text-lg text-gray-300">Free Web template by <span className='text-teal-500'>Colorlib</span></div>
        </div>

        <button className="px-6 py-3 rounded-2xl bg-blue-400 text-black hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
          Watch Video
        </button>
      </div>
    </div>
  );
}

export default Banner;
