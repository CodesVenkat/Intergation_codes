//  click the image to change the image in display

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { Button, Card, Container, Grid } from "@mui/material";
import "../../App";

const DisplayProduct = () => {
  const [data, setData] = React.useState({});
   // state to handle the image
  const [currentimage, setCurrentimage] = useState();
 

  const { productId } = useParams();


  const getApi = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);
        // Default Image
        // variantimages & default Image comes from api
        result.data.variantImages.forEach(element => {
          if(element.defaultImage===1){
            setCurrentimage(element.imageURL)
          }
        });
        console.log(result, "onecrd");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };


  useEffect(() => {
    getApi();
  }, []);

  // set the current image to clickable image
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
                 
                />
              ):('loading')}
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
                 // click to change the image handleclick
                      onClick={() => handleimageChange(val.imageURL)}
                    />
                  </Card>
                ))}

                <div style={{height:"2px",width:"2px"}}>
                  <img src='' alt="img2" />
                  <div>
                     <p> {`Rs:`}</p>
                   <p>{`3 in stock`}</p>
                  </div>
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


// app.css
.im1
{
    width: 100%;
    max-width: 470px;
}

.img2{
    height: 100px;
    width: 100px;
}

export default DisplayProduct;
