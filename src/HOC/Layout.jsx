import React from 'react'
import MainNav from '../Components/Navigation/MainNav'
import { Outlet } from 'react-router-dom'
import here from '../assets/Banner.jpg'


function Layout() {
  return (
    <div>
      <img
        src={here}
        alt="heroimage"
        className="w-full h-screen object-cover bg-black opacity-90 fixed -z-50 top-0 bottom-0"
      />
      <MainNav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
