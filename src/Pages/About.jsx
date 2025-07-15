import React from 'react'
import AboutUs from '../Components/Page Components/Home/AboutUs'
import Team from '../Components/Page Components/Home/Team'
import Blogs from '../Components/Page Components/Home/Blogs'
import ContactUs from '../Components/Page Components/Home/ContactUs'

function About() {
  return (
    <div className='mt-14'>
      <AboutUs/>
      <Team/>
      <Blogs/>
      <ContactUs/>
    </div>
  )
}

export default About
