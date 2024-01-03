// This dropDown contains 
// if i click name it shows email
// eg : if click "Subash" in DRopdown it displays   "email": "Subash.k@amizhth.com",
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = [
  {
    "name": "Subash",
    "email": "Subash.k@amizhth.com",
  },
  {
    "name": "Ajay",
    "email": "deoajay.j@amizhth.com",
  },
  {
    "name":"VENKAT",
    "email":"venkat@email.com"
  }
];

export default function ControllableStates() {
  const [email, setEmail] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className='forms'>
     
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        value={email}
        onChange={(event, newValue) => {
          setEmail(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select a Name" />}
        getOptionLabel={(option) => option.name}
      />
       {/* <div>{`email: ${email ? email.email : ''} `}</div> */}
       <div>{`${inputValue} email : ${email ? email.email : ''}`}</div>
    </div>
    
  );
}
