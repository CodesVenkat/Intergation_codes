import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableMap = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    Tabledata();
  }, []);

  const Tabledata = () => {
    apiService("ActorsImages.json", null, "unauthget")
      .then((result) => {
        console.log(result);
        setImages(result.data.ActorsImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actor ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {images &&
              images.map((a) => (
                <TableRow key={a.id}>
                  <TableCell align="right">{a.id}</TableCell>
                  <TableCell align="right">{a.Name}</TableCell>
                  <TableCell align="right">
                    <img
                      src={a.imageURL}
                      alt="img"
                      style={{ width: "100px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableMap;
