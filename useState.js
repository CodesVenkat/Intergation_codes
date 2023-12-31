import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Selectors = () => {
  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
    // Update the state with the new input value
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div>
      <TextField
        value={inputValue}
        onChange={(e)=>handleChange(e)}
        label="Type something"
      />
      <Typography variant="body1">
        You typed: {inputValue}
      </Typography>
    </div>
  );
};

export default Selectors;


// example 2

import React, { useState } from 'react';

const Third = () => {
  // The useState function returns an array with two elements:
  // The first element is the current state value.
  // The second element is a function that allows you to update the state.
  const [state, setState] = useState(1);

  // Example of usage
  const handleClick = () => {
    // Use the setState function to update the state.
    setState(state+1);
    console.log(state);
  };

  return (
    <div>
      <p>Current state: {state}</p>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};

export default Third;
