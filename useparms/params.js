import React, { useEffect, useState } from "react";
import "./PrdCrd.css";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaCartPlus } from "react-icons/fa";
import { Grid } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { productCrd } from "./PrdCrdData";


function ParamsCrds() {
  const [productDetail, setProductDetail] = useState();
  // const location = useLocation();
  // console.log(location,'location>');

  // const productDetail = location.state;

  const { id } = useParams();

  const dataID = parseInt(id,10)
 

  

  

  useEffect(() => {
    
    const productDetail = productCrd.filter((card) => card?.id === dataID);
  setProductDetail(productDetail[0]);
  console.log(productDetail, "prod");
  }, [])
  

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {productDetail && (
          <Card style={{ width: "22rem" }}>
            <div className="main-stock">
              <p className="stockss">{productDetail?.stock || "title"}</p>
            </div>
            <Card.Img
              variant="top"
              src={productDetail.imag}
              style={{ width: "100%", maxWidth: "260px" }}
            />
            <Card.Body>
              <div className="crd-flex">
                <div>
                  <Card.Title className="arrcrd-title">
                    {productDetail.title}
                  </Card.Title>
                  <Card.Text className="arrcrd-text">
                    {productDetail.price}
                  </Card.Text>
                </div>
                <div>
                  <FaCartPlus style={{ fontSize: "22px" }} />
                </div>
              </div>
              <Stack spacing={1}>
                <Rating name="size-small" size="small" />
              </Stack>
            </Card.Body>
          </Card>
        )}
      </Grid>
    </>
  );
}

export default ParamsCrds;
