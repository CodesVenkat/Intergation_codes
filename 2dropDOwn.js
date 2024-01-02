import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const options = [
  {
    "name": "Subash",
    "email": "Subash.k@amizhth.com",
    "address": "Simmakal",
    "subject":[ "Angular1", "TypeScript"],
        
  },
  {
    "name": "Ajay",
    "email": "deoajay.j@amizhth.com",
    "address": "Aarappalayam",
    "subject": ["Java", "SpringBoot"]
  },
  {
    "name": "Venkat",
    "email": "Venkat@email.com",
    "address": "Jaihindpuram",
    "subject": ["React", "Material UI"]
  }
];

export default function ControllableStates() {

  const [subject, setSubject] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const[selected,setSelected]= React.useState()
  
 const handleChange = (e) =>{
   setSelected(e.target.value)
 }

// console.log(options.subject.title);

  return (
    <div className='forms'>
      <br />
      <Autocomplete
        value={subject}
        onChange={(event, newValue) => {
          setSubject(newValue);
          console.log(newValue);
        //   setInputValue(newValue ? newValue.subject[0] : ''); // Set inputValue to the first subject
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
   

   <br />
{subject && (
    <FormControl fullWidth>
    <InputLabel>Subjects</InputLabel>
    <Select
      value={selected}
  onClick={handleChange}
    >
      { subject.subject.map((sub, i) => (
        <MenuItem key={i} value={sub}  >{sub}</MenuItem>
      ))}
    </Select>
  </FormControl>
)}


    </div>
  );
}
