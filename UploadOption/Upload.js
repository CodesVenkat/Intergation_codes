import React, { useEffect, useState } from "react";
import Navs from "./Navs";
import apiService from "./services/apiService";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useProgressBar } from "./Context/LoadingContext";
import Loading from "./Context/Loading";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Product = () => {
  const [open, setOpen] = React.useState(false);
  const { loading, setLoading } = useProgressBar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { control, handleSubmit, setValue } = useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);



  const getApi = () => {
    setLoading(true);
    var req = {
        "listSize": 5,
        "pageNumber": 2,
        "showProductImage": 1,
        "searchString": '',
        "show": "SALEAVAILABLE"
      }
        apiService('product/list', req, 'unauthpost')
          .then((result) => {
            setData(result.data.responseModelList);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      };


  // const getApi = () => {
  //   setLoading(true);
  //   apiService("Products", "", "unauthget")
  //     .then((result) => {
  //       setData(result.data);
  //     })
  //     .catch((err) => {})
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const onSubmit = (data) => {
    setLoading(true);
    apiService("Products", data, "unauthpost")
      .then((result) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  let logoselecetdFile = "";

  const handleFileUpload = (event) => {
    if (event !== null) {
      if (event.target === undefined) {
        logoselecetdFile = event;
      } else {
        logoselecetdFile = event.target.files[0];
      }
      if (logoselecetdFile) {
        var reader = new FileReader();
        var imagetype = logoselecetdFile.type;
        var imagedatatype = imagetype.split("/");
        var img_crt_type = imagedatatype[1];
        if (
          img_crt_type === "jpeg" ||
          img_crt_type === "jpg" ||
          img_crt_type === "png"
        ) {
          var fileValue = logoselecetdFile;
          reader.readAsDataURL(logoselecetdFile);
          reader.onload = () => {
            var logourl1 = reader.result;
            var spl = logourl1.split(",");
            var ImageValue = spl[1];
            var img_name = fileValue.name;
            setValue("imageName", img_name);
            setValue("ImageURL", logourl1);
          };
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Navs />
      <br />
      {loading ? (
        <Loading
          sx={{ position: "absolute", left: "45%", top: "50%" }}
          size={150}
        />
      ) : (
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
            >
              Products List....
            </Typography>
            <div>
              <div>
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                  Upload
                  <UploadFileIcon />
                </Button>
              </div>
            </div>
          </div>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Customer Card Upload
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="forms">
                  <Controller
                    name="ProductName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <>
                        <TextField
                          {...field}
                          fullWidth
                          label="productName"
                          margin="normal"
                        />
                      </>
                    )}
                  />
                  <br />
                  <br />
                  <Controller
                    name="Description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <>
                        <TextField {...field} label="Description" fullWidth />
                      </>
                    )}
                  />
                  <br />
                  <br />
                  <Controller
                    name="Image"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <>
                        <label htmlFor="Image">Upload a Product Image</label>
                        <TextField
                          {...field}
                          fullWidth
                          type="file"
                          onChange={(e) => handleFileUpload(e)}
                        />
                      </>
                    )}
                  />
                  <br />
                  <br />
                  <Button autoFocus type="submit" onClick={handleClose}>
                    confirm Upload
                    <UploadFileIcon />
                  </Button>
                </form>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </BootstrapDialog>
          <br />
          <br />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category Type</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((a, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                     { <TableCell>{a.categoryType}</TableCell> }
                     {<TableCell>{a.productName}</TableCell>}
                     
                      <img
                        src={a.imageURL}
                        alt="img"
                        height="50px"
                        width="50px"
                      />
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </div>
  );
};

export default Product;
