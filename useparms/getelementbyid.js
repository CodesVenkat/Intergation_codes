// please refer from bottom in App.js

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navs from "./Navs";
import apiService from "./services/apiService";
import { display } from "@mui/system";
import { Grid } from "@mui/material";
import { useProgressBar } from "./Context/LoadingContext";
import Loading from "./Context/Loading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function MediaCard() {
  const [data, setData] = React.useState();
  const{loading,setLoading}=useProgressBar();
  const Navigate = useNavigate()
useEffect(() => {
   getApi();
},[]);
   
  // apiService("Products", "", "unauthget")
  //   .then((result) => {
  //     setData(result.data);
  //     setLoading(false)
  //     console.log(result.data);
  //   })
  //   .catch((err) => {}).finally(()=>{
      
  //   });

  const getApi = () => {
    setLoading(true);
    var req = {
        // "listSize": 5,
        // "pageNumber": 2,
        "showProductImage": 1,
        // "searchString": '',
        // "show": "SALEAVAILABLE"
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


      const handleShow=(productId)=>{
          Navigate(`/DisplayProduct/${productId}`)
          console.log(productId);
      }


  return (
    <div>
      <Navs />

     {
      loading?(<Loading/>):(
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        {data &&
          data.map((a, i) => {
            return (
              <Grid item sm={12} md={4} lg={3}>
                <br />
                <Card sx={{ maxWidth: 345 }} key={i}
                 onClick={()=>handleShow(a.productId)}
                >
                  <CardMedia
                    sx={{ height: 200,width:"100%",maxWidth:"142px",margin:"0px auto" }}
                    image={a.imageURL}
                    title="green iguana"
                   
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{a.categoryType}</Typography>
                    <Typography gutterBottom variant="h5" component="div" >
                     <h5>{a.productName}</h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>{a.Description}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textDecoration:"line-through"}}>
                     {`Actual price ${a.mrp} `}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textDecoration:"line"}}>
                     { `Sale price${a.salePrice}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textDecoration:"line"}}>
                     {`you save ${a.mrp-a.salePrice} in this order`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" >BUY NOW</Button>
                    <Button variant="outlined" >ADD TO CART</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
      )
     }
    </div>
  );
}



// DisplayProduct.js

import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayProduct = () => {    
    const{id}=useParams();
  return (
    <div>
        <h1>{`${id}`}</h1>
    </div>
  )
}

export default DisplayProduct


// APP.js


import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingContext from './components/Context/LoadingContext';
import DisplayProduct from './components/ProductDisplay/DisplayProduct';


function App() {
 
  return (
    <LoadingContext>
    
    <Routes>
      <Route path="/DisplayProduct" element={<DisplayProduct/>} />
      <Route path="/DisplayProduct/:id" element={<DisplayProduct/>} />
    </Routes>
    </LoadingContext>
    
    
  );
}

export default App;
