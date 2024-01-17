// App route Component

import Main from './Component/Main'
import {  Route, Routes } from 'react-router-dom'
import Navigate from './Component/Props/Navigate'
import Params from './Component/Params/Params'

const App = () => {
  return (
    <div>
   <Routes>
     <Route path="/Params/:username" element={<Params />} />
     </Routes>
    </div>
  )
}

export default App

// Useparam component
// http://localhost:3000/Params/venkat

import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {username} = useParams()
  return (
    <div>
        <h1>{`hi user ${username}`}</h1>
    </div>
  )
}

export default Params
