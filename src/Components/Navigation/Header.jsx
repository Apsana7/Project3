import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Header() {
    const Page = [
        { title: "Home", path: "/" },
        { title: "Work", path: "/Work"},
        { title: "Services", path: "/Services"},
        { title: "About", path:"/About"},
        { title: "Blog", path:"/Blog"},
        { tilte: "Contact", path:"/Contact"}
    ];
  return (
    <div className='z-10  w-full h-20 flex py-4 border-b-2 bg-white border-gray-300 '>
      <div className='mx-auto flex w-10/12 items-center justify-between'>
        <div className='text-3xl  font-medium'>Create.</div>
         <div className="flex gap-16 text-medium justify-between items-center ">
                    {Page.map((val, i) => (
                        <div key={i} >
                            <Link to={val.path} className=" hover:text-orange-600">
                                {val.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
      </div>
  )
}

export default Header
