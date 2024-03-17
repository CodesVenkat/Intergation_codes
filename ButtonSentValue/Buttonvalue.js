import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
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

const Buttonsent = () => {
  const { control } = useForm();

  const [data, setData] = useState("");
  const [victims, setVictims] = useState("");
  const [legalHeirs, setLegalHeirs] = useState("");

  const [legalheirvalue, setLegalheirvalue] = useState("");

 const[documentType,setDocumentType]=useState("")
 const[documentImg,setDocumentImg]=useState("")

  //  modal
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleviewimage = (gettype,getdocumentimg) => {
    setOpen(true);
    setDocumentType(gettype)
    setDocumentImg(getdocumentimg)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Getabuttonvalue();
  }, []);

  const Getabuttonvalue = () => {
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
      <h1>Display a Aadhar File</h1>

      <Controller
        control={control}
        name="aadharFile"
        rules={{
          required: "file is required",
        }}
        render={({ field }) => (
          <>
            <TextField {...field} name="aadharfile" placeholder="aadharfile" />

            <Button onClick={()=>handleviewimage("aadhar",victims.aadharFile)}>View Aadhar Document</Button>
          </>
        )}
      />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {documentType === "aadhar" && (
               <img
               src={`data:image/png;base64,${documentImg}`}
               alt="Document"
               style={{ width: "100%", maxWidth: "550px" }}
             />
          )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Buttonsent;
