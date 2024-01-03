// ithula rendu DropDown box irukkum 
// first dropDown contains a name => subash
// second dropdown la Langugae select pannanum => angular ,nodejs
// angular click pannum pothu console la => frontend
// nodejs click  panna coonsole la => backend

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const options = [
  {
    name: "Subash",
    email: "Subash.k@amizhth.com",
    address: "Simmakal",
    subject: [
      {
        language: "Angular",
        domain: "frontend",
      },
      {
        language: "Node js",
        domain: "backend",
      },
    ],
  },
  {
    name: "Ajay",
    email: "deoajay.j@amizhth.com",
    address: "Aarappalayam",
    subject: [
      {
        language: "Java",
        domain: "Backend",
      },
      {
        language: "springboot",
        domain: "Framework",
      },
    ],
  },
  {
    name: "Venkat",
    email: "Venkat@email.com",
    address: "Jaihindpuram",
    subject: [
      {
        language: "React",
        domain: "frontend",
      },
      {
        language: "Node js",
        domain: "backend",
      },
    ],
  },
];

export default function ControllableStates() {
  const [subject, setSubject] = React.useState(null);
  const[select,setSelect]=React.useState("")
  const[inputValue,setInputValue]=React.useState('')

  const handleChange = (event, newValue) => {
    setSelect(event.target.value)
    console.log(event.target.value);
    // Also we can use this
    // console.log(event.target.value.domain);
  };

  return (
    <div className="forms">
      <br />
      <Autocomplete
        value={subject}
        onChange={(event, newValue) => {
          setSubject(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" />}
        getOptionLabel ={(options)=>options.name}
      />
      
      <br />
      {subject && (
        <FormControl fullWidth>
          <InputLabel>Subjects</InputLabel>
          <Select value={select} onChange={handleChange} id="select">
            {subject.subject.map((sub, i) => (
              <MenuItem key={i} value={sub.domain}>
                {sub.language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}
