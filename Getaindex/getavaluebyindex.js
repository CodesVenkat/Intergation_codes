import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";

const Sentavalue = () => {
  const [data, setData] = useState("");
  const [victims, setVictims] = useState("");
  const [legalHeirs, setLegalHeirs] = useState("");

  const[legalheirvalue,setLegalheirvalue]=useState("")

  // Modal
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = (getindex) => {
    console.log(getindex);
    setLegalheirvalue(legalHeirs[getindex])

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getaindex();
  }, []);

  const getaindex = () => {
    apiService("Details", null, "unauthget")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
        setVictims(result.data.victims);
        setLegalHeirs(result.data.victims.legalHeirs);
      })
      .catch((err) => {
        console.table(err);
      });
  };

  return (
    <div>
      <h1>{data && data.bankAccountNumber}</h1>

      <h1>{victims && victims.name}</h1>

      {legalHeirs &&
        legalHeirs.map((a,index) => (
          <ul key={a.id}onClick={()=>handleClickOpen(index)} >
            <h1  >{a.name}</h1>
          </ul>
        ))}

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <h1>  {legalheirvalue.name}</h1>
           <h1> {legalheirvalue.age} </h1> 
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sentavalue;

// short definition



  const[legalheirvalue,setLegalheirvalue]=useState("")

   const handleClickOpen = (getindex) => {
    console.log(getindex);
    setLegalheirvalue(legalHeirs[getindex])
    setOpen(true);
  };


     {legalHeirs &&
        legalHeirs.map((a,index) => (
          <ul key={a.id}onClick={()=>handleClickOpen(index)} >
            <h1  >{a.name}</h1>
          </ul>
        ))}
