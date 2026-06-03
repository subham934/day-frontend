import React from 'react'
import { useState } from 'react'

const Card = ({postData, like, count}) => {

console.log(postData)

   
  return (
    <div className='w-full h-screen bg-gray-600 flex items-center justify-center gap-5'>
      {postData.map((item)=>(
        <div key={item.id} className='card px-5 flex flex-col justify-center items-center w-90 h-60 bg-zinc-200 rounded-md border-solid border-blue-500 border-[5px] '>
        <img className='w-20 h-20 rounded-full ' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>{item.name}</h1>
          <p className='text-center'>{item.desc}</p>
          <p className='flex justify-center items-center'>likeCount : {count}</p>
          <div className='w-full flex justify-center items-center gap-2'>
          <button onClick={like} className='px-8 py-3 bg-blue-500 rounded-md'>Like</button>
          <button className='px-8 py-3 bg-red-500 rounded-md'>Dislike</button>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Card