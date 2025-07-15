import React from 'react'
import MainNav from '../Components/Navigation/MainNav'
import { Outlet } from 'react-router-dom'
import here from '../assets/LP1.jpg'
import Footer from '../Components/Footer/Footer'


function Layout() {
  return (
    <div>
      <img
        src={here}
        alt="heroimage"
        className='-z-50 bottom-0 top-0 inset-0 w-full h-full object-cover opacity-80 fixed '
      />
      <MainNav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
