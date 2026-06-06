import React from 'react'
import { useParams } from 'react-router'

const Register = () => {
    const {id} = useParams()
  return (
    
    <div>
        <h1 className='text-5xl font-bold text-white'>Register {id}</h1>
    </div>
  )
}

export default Register

