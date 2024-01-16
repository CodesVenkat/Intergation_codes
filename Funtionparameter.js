import React from 'react'

const Funtionparameter = () => {
 
  const Parameter = (a,b) =>{
    console.log(a);
    console.log(b)
    return a+b;
  }
 
  const result = Parameter(2,2)
  return (
    <div>
     
  <h1>{result}</h1>

    </div>
  )
}

export default Funtionparameter
