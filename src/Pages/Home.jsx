import React from 'react'
import Banner from '../Components/Page Components/Home/Banner'
import ICS from '../Components/Page Components/Home/ICS'
import OurWorks from '../Components/Page Components/Home/OurWorks'
import Strategy from '../Components/Page Components/Home/Strategy'
import Services from '../Components/Page Components/Home/Services'
import About from '../Components/Page Components/Home/About'

function Home() {
  return (
    <div>
     <Banner/>
     <ICS/>
     <OurWorks/>
     <Strategy/>
     <Services/>
     <About/>
    </div>
  )
}

export default Home
