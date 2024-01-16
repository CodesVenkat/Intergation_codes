import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  const  Navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>Navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Navigate
