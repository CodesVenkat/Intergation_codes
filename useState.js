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
