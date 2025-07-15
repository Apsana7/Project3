import React from 'react'
import OurWorks from '../Components/Page Components/Home/OurWorks'
import Strategy from '../Components/Page Components/Home/Strategy'
import Testimonial from '../Components/Page Components/Home/Testimonial'
import Team from '../Components/Page Components/Home/Team'
import Blogs from '../Components/Page Components/Home/Blogs'
import ContactUs from '../Components/Page Components/Home/ContactUs'
import OurServices from '../Components/Page Components/Home/OurServices'
import AboutUs from '../Components/Page Components/Home/AboutUs'

function Work() {
  return (
    <div>
      <OurWorks/>
      <Strategy/>
      <Testimonial/>
      <OurServices/>
      <AboutUs/>
      <Team/>
      <Blogs/>
      <ContactUs/>
    </div>
  )
}

export default Work
