import React from 'react'
import Banner from '../Components/Page Components/Home/Banner'
import ICS from '../Components/Page Components/Home/ICS'
import OurWorks from '../Components/Page Components/Home/OurWorks'
import Strategy from '../Components/Page Components/Home/Strategy'
import Services from '../Components/Page Components/Home/Services'
import About from '../Components/Page Components/Home/About'
import Blog from '../Components/Page Components/Home/Blog'
import Team from '../Components/Page Components/Home/Team'
import ContactUs from '../Components/Page Components/Home/ContactUs'
import Testimonial from '../Components/Page Components/Home/Testimonial'

function Home() {
  return (
    <div>
     <Banner/>
     <ICS/>
     <OurWorks/>
     <Strategy/>
     <Testimonial/>
     <Services/>
     <About/>
     <Team/>
     <Blog/>
     <ContactUs/>
     
    </div>
  )
}

export default Home
