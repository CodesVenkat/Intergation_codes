import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// An array of options containing objects with 'name' and 'email' properties
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

// Functional component 'ControllableStates'
export default function ControllableStates() {
  // State variables using React.useState
  // 'email' is initially set to the third option in the 'options' array
  const [email, setEmail] = React.useState(options[2]);
  // 'inputValue' is initially an empty string
  const [inputValue, setInputValue] = React.useState('');

  // JSX structure of the component
  return (
    <div>
      {/* Autocomplete component */}
      <Autocomplete
        // 'value' prop sets the initial selected option
        value={email}
        // 'onChange' handler updates the 'email' state when a new option is selected
        onChange={(event, newValue) => {
          setEmail(newValue);
        }}
        // 'inputValue' prop manages the input value in the Autocomplete field
        inputValue={inputValue}
        // 'onInputChange' handler updates the 'inputValue' state
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        // 'id' prop sets a unique identifier for the Autocomplete component
        id="controllable-states-demo"
        // 'options' prop sets the available options for Autocomplete
        options={options}
        // 'sx' prop provides custom styling for the Autocomplete component
        sx={{ width: 300 }}
        // 'renderInput' prop customizes the appearance of the TextField
        renderInput={(params) => <TextField {...params} label="Data" />}
        // 'getOptionLabel' prop specifies how to extract the label from each option
        getOptionLabel={(option) => option.name}
      />
      
      {/* Display the selected email value */}
      <div>{`email: ${email !== null ? `'${email.email}'` : 'null'}`}</div>
    </div>
  );
}
