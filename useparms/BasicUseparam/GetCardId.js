import { Route, Routes } from 'react-router-dom';
import LoadingContext from './components/Context/LoadingContext';
import DisplayProduct from './components/ProductDisplay/DisplayProduct';


function App() {
  return (
    <LoadingContext>
    <Routes>
      <Route path="/DisplayProduct" element={<DisplayProduct/>} />
      <Route path="/DisplayProduct/:productId" element={<DisplayProduct/>} />
    </Routes>
    </LoadingContext>
  );
}

export default App;

// CustomerCard.js
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
            console.log(result.data, "displaycrd");
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
                    {/* <Typography variant="body2" color="text.secondary">
                    {a.stockAvl}
                    </Typography> */}
                    <Typography variant="body2" color="text.secondary" style={{color:"red"}}>
                   {`  ${a.discountType} 20% in every order`}
                    </Typography>
                     <Typography variant="body2" color="text.secondary" style={{textDecoration:"line",color:"green"}}>
                     {`${a.stockAvl} Stocks left Hurry Up.......`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textDecoration:"line",color:"blue"}}>
                     {`you save ${a.mrp-a.salePrice} in this order`}
                    </Typography> 
                  </CardContent>
                  <CardActions>
                    <Button  sx={{backgroundColor:"green",color:"white",'&:hover':{
                       backgroundColor:"white",
                       color:"green"

                    }}} >BUY NOW</Button>
                    <Button  sx={{backgroundColor:"orange",color:"white","&:hover":{
                      backgroundColor:"white",
                      color:"orange"
                    }}} >ADD TO CART</Button>
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


// To display id

import React from 'react'

const DisplayProduct = () => {
    const{productId}=useParams()

  return (
    <div>
        <h1>{`${productId}`}</h1>
    </div>
  )
}

export default DisplayProduct
