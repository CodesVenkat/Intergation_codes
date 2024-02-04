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


// To display id only

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


// To display full Product

// Click to Display a Product in that product there has been Various Images like( font, back ,side) 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import "../../App";
import Loading from "../Context/Loading";

const DisplayProduct = () => {
  const [data, setData] = React.useState({});
  const [currentimage, setCurrentimage] = useState();
  const [variant, setVariant] = useState();
  const [size, setSize] = useState({});
  const [stockshow, setStockshow] = useState({});
  const [amountshow, setAmountshow] = useState({});
  const [newImg, setNewImg] = useState([]);

  // useParms to Get Id
  const { productId } = useParams();

  const getApi = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);
        console.log(result.data, "getApi");
        // numberOfVariants in Api is 0
        if (result.data.numberOfVariants === 0) {
          setNewImg(result.data.variantImages);
        
          result.data.variantImages.forEach((element) => {
            if (element.defaultImage === 1) {
              setCurrentimage(element.imageURL);
            }
          });
        } else {
          getVariantApi();
          console.log(newImg,"newImg");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const getVariantApi = () => {
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        console.log(result.data, "getVariantApi");
        result.data.responseModelList.forEach((element) => {
          if (element.defaultVariant === 1) {
            setNewImg(element.variantImages);
            console.log(newImg);
            element.variantImages.forEach((val) => {
              if (val.defaultImage === 1) {
                setCurrentimage(val.imageURL);
                console.log(val.imageURL);
                setSize({ variantsoptions: element.variantsoptions });
                setStockshow({ stock: element.stock });
                setAmountshow({ amount: element.amount });
              }
            });
          }
          element.variantImages.forEach((val) => {
            if (val.defaultImage === 1) {
              element.imageURL = val.imageURL;
              console.log( val.imageURL ,"url");
            }
          });
        });
        setVariant(result.data.responseModelList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getApi();
    }, 2000);
  }, []);

  useEffect(() => {
      getVariantApi();
  }, []);


  const handleimageChange = (data) => {
    setNewImg(data.variantImages);
    data.variantImages.forEach((element) => {
      if (element.defaultImage === 1) {
        setCurrentimage(element.imageURL);
        setSize({ variantsoptions: element.variantsoptions });
        setStockshow({ stock: element.stock });
        setAmountshow({ amount: element.amount });
      }
    });
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={6} md={6} sm={12}>
              <div>
                {currentimage ? (
                  <img
                    src={currentimage}
                    alt="img"
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                ) : (
                  <Loading/>
                )}
              </div>

              <div style={{ display: "flex", marginTop: "30px", gap: "40px" }}>
                {/* bread image */}
                {newImg &&
                  newImg.map((val) => (
                    <Card key={val.id}>
                      <img
                        src={val?.imageURL}
                        alt="img"
                        className="img2"
                        onClick={() => setCurrentimage(val.imageURL)}
                      />
                    </Card>
                  ))}
                <div></div>
              </div>

              <h2> {data.productName}</h2>
              <p>
                Pizza, a cheesy delight on dough so thin, Baked to perfection, a
                culinary win.
              </p>
              <h5 style={{ color: "red" }}>
                {`${data.stockAvl}`} Stocks left hurry up........
              </h5>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  sx={{
                    backgroundColor: "orange",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "blue",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
                <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "green",
                    },
                  }}
                >
                  BUY NOW
                </Button>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12}>
              <p>
                In the heart of the kitchen, dough is tossed with pure delight,
                rising to meet its cheesy destiny. The oven's warmth cradles
                this culinary canvas as tomato sauce dances in vibrant spirals,
                creating a saucy masterpiece. A symphony of flavors unfolds,
                melding together in a perfect harmony, delivering the joyous
                creation that is pizza—a delectable delight for all to savor.
              </p>
              <h5 style={{ fontSize: "30px" }}>
                {" "}
                {/* {`₹ ${data.purchasePrice + 100}`} */}
                <p>{amountshow && amountshow.amount}</p>
                <p style={{ color: "green" }}>{size && size.variantsoptions}</p>
                <p style={{ color: "blue" }}>{`Stock:${
                  stockshow && stockshow.stock
                }`}</p>
              </h5>

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginTop: "70px",
                  flexWrap: "wrap",
                }}
              >
                {variant &&
                  variant.map((val) => {
                    return (
                      <div key={val.id} onClick={() => handleimageChange(val)}>
                        <img
                          src={val.imageURL}
                          alt="img"
                          style={{ height: "100px", width: "100px" }}
                        />
                        <p>{val.variantsoptions}</p>
                      </div>
                    );
                  })}
              </div>

              {/* {
                variant && variant.find((a,i)=>{
                  return(
                      <p key={i}>{a.stock}</p>
                  )
                })
              }
              
              */}

              <p style={{ color: "orange" }}>
                {" "}
                {data.discountType} 10% discout in every order
              </p>
              <p>Offers</p>
              <p>
                Buy 2 get 1{" "}
                <span style={{ color: "green", fontWeight: "30px" }}>
                  free free free.....
                </span>
              </p>
              <p>
                Get{" "}
                <span style={{ color: "green" }}>30% discount on Tuesday</span>
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default DisplayProduct;
