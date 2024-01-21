// for Example if the T-shirt has different Sizes m,s,xl have a different rates
// same blue T-shirt has Different sizes that x-220 xl-280 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "./components/service/apiService";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import { CONIMG } from "./assests/Imgd";

function GetShowCrd() {
  const [data, setData] = useState({});
  const [currentImage, setCurrentImage] = useState();
  const [variants, setvariants] = useState();
  const [stocks, setStocks] = useState();
  const [imgess, setImgess] = useState();

  const { productId } = useParams();

  // const oneShow = () => {
  //   var req = {
  //     "productId": 1,
  //     "listSize": 10,
  //     "pageNumber": 1,
  //   }
  //   apiService("/product/variants/list ", req, "unauthget")
  //     .then((result) => {
  //       setData(result.data);
  //       if(variants === 0){
  //         result.data.variantImages.forEach((a) => {
  //           if (a.defaultImage === 1) {
  //             setCurrentImage(a.imageURL);
  //           }
  //         });
  //       }else{

  //       }

  //       // console.log(data?.variantImages?.[0]?.imageURL);
  //       console.log(result.data,"list");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const oneShow = () => {
    apiService(product/ ${productId}, "", "unauthget")
      .then((result) => {
        setData(result.data);

        if (result.data.numberOfVariants === 0) {
          result.data.variantImages.forEach((element) => {
            if (element.defaultImage === 1) {
              setCurrentImage(element.imageURL);
            }
          });
        } else {
          onevariants();
        }

        console.log(result, "onecrd");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const onevariants = () => {
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        setStocks(result.data.responseModelList);
        result.data.responseModelList.forEach((element) => {
          if (element.defaultVariant === 1) {
            element.variantImages.forEach((val) => {
              if (val.defaultImage === 1) {
                setCurrentImage(val.imageURL);
              }
            });
          }
          element.variantImages.forEach((val) => {
            if (val.defaultImage === 1) {
              element.imageURL = val.imageURL;
            }
          });
        });
        setvariants(result.data.responseModelList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShowed = (ig) => {
    setCurrentImage(ig);
  };

  useEffect(() => {
    oneShow();
  }, []);
  useEffect(() => {
    onevariants();
  }, []);

  return (
    <div>
      {/* <Grid item sm={12} md={4} lg={3}>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            sx={{ height: 200, width: "100%" }}
            image={data?.variantImages?.[0]?.imageURL}
            title="Products"
          />
          {data?.variantImages?.map((val) => {
            return (
              <CardMedia
                sx={{ height: 200, width: "100%", maxWidth: "142px" }}
                image={val?.imageURL}
                title="Products"
              />
            );
          })}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.productName}
            </Typography>

            <Typography gutterBottom variant="para" component="div">
              ₹{data.salePrice - data.discount}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "orange",
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              Buy Now
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "orangered",
                "&:hover": {
                  backgroundColor: "orangered",
                },
              }}
            >
              <FaCartPlus style={{ marginRight: "10px" }} /> Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid> */}
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
          sx={{ marginTop: "20px" }}
        >
          <Grid item sm={12} md={6} lg={6} sx={{ textAlign: "right" }}>
            {currentImage ? (
              <>
                <img
                  src={currentImage}
                  alt="Itms"
                  className="item-img"
                  style={{ width: "100%", maxWidth: "400px" }}
                />
              </>
            ) : (
              <p>Loading...</p>
            )}
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              {data?.variantImages?.map((val) => {
                return (
                  <CardMedia
                    key={val.id}
                    sx={{ height: 70, width: "100%", maxWidth: "70px" }}
                    image={val?.imageURL}
                    title="Products"
                    onClick={() => handleShowed(val?.imageURL)}
                  />
                );
              })}
            </div>
            <div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="8px"
              >
                {variants &&
                  variants.map((a) => (
                    <Grid item>
                      <div>
                        <img
                          src={a.imageURL}
                          alt=""
                          style={{ width: "100%", maxWidth: "50px" }}
                        />
                      </div>
                      <div>
                        <p>{a.variantsoptions}</p>

                        <p>Stock{a.stock}</p>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Grid>
          <Grid item sm={12} md={6} lg={6} sx={{ paddingTop: 0 }}>
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "gray" }}
              >
                {data.productName}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#32CD30" }}
              >
                ₹{data.salePrice - data.discount}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ color: "red" }}
              >
                only {data.stockAvl} items left
              </Typography>
              <Typography
                gutterBottom
                variant="para"
                component="div"
                sx={{ color: "gray" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                molestiae iste reprehenderit consequatur voluptates? Aperiam ab
                iusto inventore nulla ex eaque aut nemo voluptatem, molestias
                minima! Consequatur sequi nisi quia?
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ color: "red" }}
              >
                Size :
              </Typography>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", padding: 0 }}
              >
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "orange",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "orangered",
                    "&:hover": {
                      backgroundColor: "orangered",
                    },
                  }}
                >
                  <FaCartPlus style={{ marginRight: "10px" }} /> Add to Cart
                </Button>
              </CardActions>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GetShowCrd;
