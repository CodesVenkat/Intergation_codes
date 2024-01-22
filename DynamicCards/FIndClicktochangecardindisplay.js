
// clicktochangecard 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import "../../App";

const DisplayProduct = () => {
  const [data, setData] = React.useState({});
  const [currentImage, setCurrentImage] = useState();
  const [variant, setVariant] = useState([]);
  const { productId } = useParams();

  const getApi = () => {
    apiService(`product/${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);

        if (result.data.numberOfVariants === 0) {
          const defaultImage = result.data.variantImages.find((image) => image.defaultImage === 1);

          if (defaultImage) {
            setCurrentImage(defaultImage.imageURL);
          }
        } else {
          getVariantApi();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVariantApi = () => {
    const req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };

    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        const variants = result.data.responseModelList;

        const defaultVariant = variants.find((variant) => variant.defaultVariant === 1);

        if (defaultVariant) {
          const defaultImage = defaultVariant.variantImages.find((image) => image.defaultImage === 1);

          if (defaultImage) {
            setCurrentImage(defaultImage.imageURL);
          }
        }

        setVariant(variants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleImageChange = (imageUrl) => {
    setCurrentImage(imageUrl);
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
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt="img"
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                ) : (
                  "loading"
                )}
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                {variant.map((val) => (
                  <div key={val.id}>
                    <img src={val.imageURL} alt="img" onClick={() => handleImageChange(val.imageURL)} />
                    <p>{val.stock}</p>
                    <p>{val.variantsoptions}</p>
                  </div>
                ))}
              </div>
              <h2>{data.productName}</h2>
              <p>
                Pizza, a cheesy delight on dough so thin, Baked to perfection, a
                culinary win.
              </p>
              <h5 style={{ color: "red" }}>{`${data.stockAvl}`} Stocks left hurry up........</h5>
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
                      onClick={() => handleImageChange(val.imageURL)}
                    />
                  </Card>
                ))}
                <div>
                  {variant.flatMap((val) => val.variantImages).map((val) => (
                    <div key={val.id}>
                      <img src={val.imageURL} alt="" />
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
                creating a saucy masterpiece. A sym


// map

<div>
  {variant &&
    variant.map((val) => (
      <div key={val.id}>
        {val.variantImages.map((image) => (
          <div key={image.id}>
            <img src={image.imageURL} alt="" />
            {/* You may include additional details for each variant image */}
            {/* <p>{val.amount}</p> */}
          </div>
        ))}
      </div>
    ))}
</div>
