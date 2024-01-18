import React, { useState, useEffect } from "react";
import Navs from "./navb/Navs";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import apiService from "./service/apiService";
import { Container, Grid } from "@mui/material";
import { useProgressBar } from "./context/LoadingContext";
import Loder from "./context/Loder";
import { useNavigate } from "react-router-dom";

function CustProd(props) {
  const [store, setStore] = useState();
  const { loading, setLoading } = useProgressBar();
  const navigate = useNavigate();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    setLoading(true);
    var req = {
      // listSize: 5,
      // pageNumber: 2,
      showProductImage: 1,
      // searchString: "",
      // show: "SALEAVAILABLE",
    };
    apiService("product/list", req, "unauthpost")
      .then((result) => {
        setStore(result.data.responseModelList);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleShow = (productId) => {
    navigate(`/getshowcrd/${productId}`);
    console.log(productId);
  };

  return (
    <div>
      <Navs />
      <Container>
        <h1 style={{ color: "#7B50D5", margin: "30px 0px" }}>Products...</h1>
        {loading ? (
          <Loder />
        ) : (
          <div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              sx={{ marginTop: "20px" }}
            >
              {store &&
                store.map((p) => {
                  return (
                    <Grid item sm={12} md={4} lg={3} key={p.productId}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                          sx={{ height: 200, width: "100%", maxWidth: "142px" }}
                          image={p.imageURL}
                          title="Products"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            onClick={() => handleShow(p.productId)}
                          >
                            {p.productName}
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="para"
                            component="div"
                          >
                            ₹{p.salePrice - p.discount}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ textAlign: "center" }}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#7B50D5" }}
                          >
                            Buy Now
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#7B50D5" }}
                          >
                            Add to Cart
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
}

export default CustProd;



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
