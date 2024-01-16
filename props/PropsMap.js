// Props.js


import React from 'react'
import Details from './Details'

const Propss = () => {

  const EmployeeInfo =[
    {
      Name:"venkat",
      Age:21
    },{
      Name:"vijay",
      Age:50
    },{
      Name:"ajith",
      Age:52

    }
  ]

  return (
    <div>
     
     {
       EmployeeInfo && EmployeeInfo.map((info)=>{
         const{Name,Age}= info
          return(
            <Details Name={Name} Age={Age}/>
          )
       })
     }
    

    </div>
  )
}

export default Propss


// Deatils.js


import React from 'react'

const Details = (props) => {
    // Destructure the props
    const{Name,Age} = props
    // console.log(props);
  return (
    <div>
        <p>Name :{Name}</p>
        <p>Age : {Age}</p>
    </div>
  )
}

export default Details
