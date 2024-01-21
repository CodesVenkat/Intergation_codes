// create a context here

import React, {  createContext, useState } from "react";

export const Appcontext = createContext();

const Contextuse = ({children}) => {
  const [name, setName] = useState('');

  return (
    <div className="context">
      <div>
        
        <div><h1>useContext Hook </h1></div>
         <Appcontext.Provider value={{name,setName}}>
          {children}
  // inga enna componet kuduthalum data share pannu nu soldrom adhku chidren nu pass panrom
  // ipa <Getname/> nu koduthuom na getname la data share aagum
         </Appcontext.Provider>
      </div>
    </div>
  );
};

export default Contextuse;


// Getname 

import React, { useContext } from 'react'
import { Appcontext } from './Contextuse'
import { TextField } from '@mui/material';

const Getname = () => {

    const {setName}= useContext(Appcontext);


    const handlenamechange = (e) =>{
         setName(e.target.value)
    }

  return (
    <div>
        <TextField
         placeholder='Enter Name'
         onChange={(e)=>handlenamechange(e)}
        
        />
    </div>
  )
}

export default Getname

// Displayname.js

import React, { useContext } from 'react'
import { Appcontext } from './Contextuse'


const Displayname = () => {
    const{name}=useContext(Appcontext)
  return (
    <div>
        Name : {name}
    </div>
  )
}

export default Displayname

// Main.js

import React from 'react'
import Contextuse from '../Usecontext Hook/Contextuse';
import Getname from '../Usecontext Hook/Getname';
import Displayname from '../Usecontext Hook/Displayname';

const Main = () => {
  return (
    <div>
      <Contextuse>
        <Getname/>
        <Displayname/>
      </Contextuse>
    </div>
  )
}

export default Main
