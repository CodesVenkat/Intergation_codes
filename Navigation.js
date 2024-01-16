import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  const Navi = useNavigate()
  return (
    <div>
      <button onClick={()=>Navi('/')}>Go TO home</button>
    </div>
  )
}

export default Navigate


// app.js

import React from 'react'
import Main from './Component/Main'
import {  Route, Routes } from 'react-router-dom'
import Navigate from './Component/Props/Navigate'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/Navigate" element={<Navigate/>} />
   </Routes>
   
    </div>
  )
}

export default App
