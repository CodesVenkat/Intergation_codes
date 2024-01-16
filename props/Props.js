// Details.js
import React from 'react'

const Details = (props) => {
    console.log(props);
  return (
    <div>
        <p>Name :{props.Name}</p>
        <p>Age : {props.Age}</p>
    </div>
  )
}

export default Details



// props.js

import React from 'react'
// import Details
import Details from './Details'

const Propss = () => {
  return (
    <div>
      {/* Props is the short form of properties */}
      {/* props == functional parameters */}

      <Details Name="venkat"Age="21"/>

    </div>
  )
}

export default Propss
