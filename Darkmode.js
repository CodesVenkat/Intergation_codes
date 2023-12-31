// ThemeProvider.js

import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()


function ThemeProvider({children}) {

    const[dark,setDark]=useState(false)

    const  toggletheme = () => {
        setDark(!dark)
    }

    
  const bodyStyles = {
    background: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333' ,
    transition: 'background-color 0.3s, color 0.3s',
    height: '100%', 
    margin: 0,
  };


  return (
   <ThemeContext.Provider value={{dark,toggletheme}}>
  <div style={bodyStyles}>
  {children}
  </div>
   </ThemeContext.Provider>
  )
}

export default ThemeProvider


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };


// Themeset.js


import React from 'react'
import { useTheme } from './ThemeProvider'
function ThemeSet() {
  
    const{dark,toggletheme} = useTheme();

  return (
    <div style={{ background: dark ? '#333' : 'lightblue', color: dark ? '#fff' : '#333' }}>
      <p>{dark ? 'Dark Mode' : 'Embrace the Shadows change to dark'}</p>
      {/* <button onClick={toggletheme} >c</button> */}
      <input className="switch" type="checkbox" checked="true" onClick={toggletheme}/>
    </div>
  )
}

export default ThemeSet

// import in app

<ThemeProvider>
  <ThemeSet>
</ThemeProvider>

  
