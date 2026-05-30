import React from 'react'

const Card = ({data, status}) => {

  return (
    <div className='app'>
        {data.map((item)=>{
            return <div className='card'>
            <img className='image' src={item.url} alt="" />
            <h1>{item.name}</h1>
            <p>{item.age}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur.</p>
            <button>{status}</button>
           </div>
        })}
    </div>
  )
}

export default Card