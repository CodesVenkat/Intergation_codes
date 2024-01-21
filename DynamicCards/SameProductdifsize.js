// for Example if the T-shirt has different Sizes m,s,xl have a different rates
// same blue T-shirt has Different sizes that x-220 xl-280 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import "../../App";

const DisplayProduct = () => {
  const [data, setData] = React.useState({});
  const [currentimage, setCurrentimage] = useState();
  const [variant, setVariant] = useState();
  const [xl, setx1] = useState();
  const { productId } = useParams();

  const getApi = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);
        // numberOfVariants in Api is 0
        if (result.data.numberOfVariants === 0) {
          result.data.variantImages.forEach((element) => {
            if (element.defaultImage === 1) {
              setCurrentimage(element.imageURL);
            }
          });
        } else {
          getVariantApi();
        }
        console.log(result.data, "onecard");
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
        result.data.responseModelList.forEach((element) => {
          if (element.defaultVariant === 1) {
            element.variantImages.forEach((val) => {
              if (val.defaultImage === 1) {
                setCurrentimage(val.imageURL);
              }
            });
          }
          element.variantImages.forEach((val) => {
            if (val.defaultImage === 1) {
              element.imageURL = val.imageURL;
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
    getApi();
    getVariantApi();
  }, []);

  const handleimageChange = (geturl) => {
    setCurrentimage(geturl);
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
                  "loading"
                )}
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop:"70px" }}>
                {variant &&
                  variant.map((val) => {
                    return (
                      <div>
                      <img src={val.imageURL} alt="img"  style={{height:"100px",width:"100px"}}/>
                        <p>{val.stock}</p>
                        <p>{val.variantsoptions}</p>
                      </div>
                    );
                  })}
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
                      color: "orange",
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
              <div style={{ display: "flex", marginTop: "30px", gap: "40px" }}>
                {data?.variantImages?.map((val) => (
                  <Card key={val.id}>
                    <img
                      src={val.imageURL}
                      alt="img"
                      className="img2"
                      onClick={() => handleimageChange(val.imageURL)}
                    />
                  </Card>
                ))}
                <div>
                  {variant?.responseModelList?.variantImages?.map((val) => (
                    <div key={val.id}>
                      <img src={val.imageURL} alt="" />
                      {/* <p>{variant.amount}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </Grid>

            <Grid item md={6} sm={12}>
              <p>
                In the heart of the kitchen, dough is tossed with pure delight,
                rising to meet its cheesy destiny. The oven's warmth cradles
                this culinary canvas as tomato sauce dances in vibrant spirals,
                creating a saucy masterpiece. A symphony of flavors unfolds,
                melding together in a perfect harmony, delivering the joyous
                creation that is pizza—a delectable delight for all to savor.
              </p>
              <h2 style={{ fontSize: "50px" }}>
                {" "}
                {`₹ ${data.purchasePrice + 100}`}
              </h2>
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
