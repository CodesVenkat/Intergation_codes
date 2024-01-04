// in this code which has a add input ,delete input
// using useform usefieldarray 
//   const {
  //   fields: itemFields,
    // append: addItem, add
  //   remove: removeItem, delete
  // } = useFieldArray({

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, FormControl } from "@mui/material";
import { FaTrash } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

const Additem = () => {

  const[store,setStore]=useState([]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    formState: { errors },
  } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const {
    fields: itemFields,
    append: addItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "Items",
  });



  if (itemFields.length === 0) {
    addItem();
  }


  const onFormSubmit = (data) => {
     setStore(data.Items)
  }

  const deleteItem = (i) =>{
    setStore((store)=>store.filter((_,b)=> b !== i))
  }

  return (
    <div
      style={{
        boxShadow: "5px 9px 9px rgba(0, 0, 0, 0.1)",
        width: "70%",
        margin: "60px auto",
      }}
    >
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <TableContainer
          component={Paper}
          style={{
            background: " linear-gradient(to right, #3498db, #9b59b6)",
            color: "white",
          }}
        >
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ color: "white" }}>
                  NO
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Input
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  ADD
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemFields &&
                itemFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell style={{ color: "white" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">
                        <FormControl >
                          <input
                            style={{ height: "30px", width: "250px" }}
                            {...register(`Items.${index}.item`, {
                              required: "Item is empty",
                            })}
                          />
                         <p style={{color:"red"}}> {errors.Items?.[index]?.item &&
                            errors.Items?.[index]?.item.message}</p>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => addItem()}>
                          <TiPlus
                            style={{
                              fontSize: "45px",
                              backgroundColor: "white",
                              color: "black",
                              alignItems:"center",
                              margin : "0px 2px 0px 80px"
                            }}
                          />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <button onClick={() => removeItem(index)} style={{margin : "0px 2px 0px 70px",fontSize:"33px"}}>
                          {" "}
                          <FaTrash />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
      
        
          <Button
            type="submit"
            style={{
              width: "50%",
              background: " linear-gradient(to right, #3498db, #9b59b6)",
              color: "white",
              marginTop: "20px",
            }}
          >
            submit
          </Button>
        </div>
      </form>
{ store.map((a,i)=>(
   <ul key={i}>
   <li>{a.item}</li>
   <button onClick={()=>deleteItem(i)}>delete</button>
   </ul>
))}

    </div>
  );
};

export default Additem;
