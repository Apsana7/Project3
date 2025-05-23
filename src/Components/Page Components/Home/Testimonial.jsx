import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hum1 from "../../../assets/LP11.webp";
import hum2 from "../../../assets/LP12.webp";
import hum3 from "../../../assets/LP10.webp";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Robert Spears",
    image: hum1,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Jane Doe",
    image: hum2,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Alex Johnson",
    image: hum3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <section className="w-full py-12 px-4 bg-white flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Testimonials
      </h2>

      <Carousel
        className="w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/4"
        arrows={false}
        autoPlaySpeed={5000}
        infinite
        showDots
        keyBoardControl
        pauseOnHover
        swipeable
        draggable
        containerClass="container mx-auto"
        itemClass="px-4"
        responsive={responsive}
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="py-6 px-4 text-center flex flex-col items-center"
          >
            <p className="italic text-gray-600 text-sm sm:text-base md:text-xl lg:text-2xl font-light max-w-md mb-6 leading-relaxed">
              “{t.quote}”
            </p>

            <div className="flex flex-col items-center gap-3 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              />
              <p className="font-semibold text-base text-gray-700">{t.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonial;
