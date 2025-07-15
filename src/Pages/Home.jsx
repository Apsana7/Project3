import React from 'react'
import Banner from '../Components/Page Components/Home/Banner'
import ICS from '../Components/Page Components/Home/ICS'
import OurWorks from '../Components/Page Components/Home/OurWorks'
import Strategy from '../Components/Page Components/Home/Strategy'
import Blogs from '../Components/Page Components/Home/Blogs'
import Team from '../Components/Page Components/Home/Team'
import ContactUs from '../Components/Page Components/Home/ContactUs'
import Testimonial from '../Components/Page Components/Home/Testimonial'
import OurServices from '../Components/Page Components/Home/OurServices'
import AboutUs from '../Components/Page Components/Home/AboutUs'

function Home() {
  return (
    <div>
      <section id='banner'>
        <Banner />
        <ICS />
      </section>

      <section id='work'>
        <OurWorks />
        <Strategy />
        <Testimonial />
      </section>

      <section id='services'>
        <OurServices />
      </section>

      <section id='about'>
        <AboutUs />
        <Team />
      </section>

      <section id='blog'>
        <Blogs />
      </section>

      <section id='contact'>
        <ContactUs />
      </section>
    </div>
  )
}

export default Home
