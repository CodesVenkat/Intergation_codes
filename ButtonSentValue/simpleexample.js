

 const[documentType,setDocumentType]=useState("")
 const[documentImg,setDocumentImg]=useState("")

  const handleviewimage = (gettype,getdocumentimg) => {
    setOpen(true);
    setDocumentType(gettype)
    setDocumentImg(getdocumentimg)
  };

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
