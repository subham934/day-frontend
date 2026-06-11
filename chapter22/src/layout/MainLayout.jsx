import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full bg-[#000000] text-white '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout