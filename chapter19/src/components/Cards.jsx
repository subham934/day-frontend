import React from 'react'
import { FaRegStar } from "react-icons/fa";

const Cards = () => {
  return (
    <div className='w-60 h-80 bg-[#111111]  overflow-hidden rounded-lg flex flex-col justify-between'>
        <div className='w-full h-[50%]'>
            <img className='w-full h-full object-cover' src="" alt="" />


        </div>
        <div className='flex items-center justify-between'>
            <h1>Cyberpunk 2077</h1>
            <div className='flex items-center'>
                <FaRegStar/>
                <h5>4.9</h5>
            </div>
        </div>
        <p className='font-extralight text-wrap line-clamp-2 text-sm'>
            Experience Night City as a mercenary outlaw in this open-world action-adventure RPG.
        </p>
        <button className='px-20 py-2 bg-white rounded-full text-black whitespace-nowrap'>View Details</button>
    </div>
  )
}

export default Cards