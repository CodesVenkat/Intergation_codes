import React from "react";
import Navs from "./Navs";
import { Button, Container, Grid } from "@mui/material";
const FirstPage = () => {
  return (
    <div className="first">
      <Container>
        <Navs />
        <div className="s">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={6}>
              <h1>We Deal in brilliant creativity</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                voluptatem!
              </p>
              <Button>Read more</Button>
            </Grid>

            <Grid item lg={6}>
            <h1>We Deal in Brilliance</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              voluptatem!
            </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default FirstPage;

// css

.first {
  background: linear-gradient(0deg, rgba(69, 69, 69, 0.7), rgba(0, 0, 0, 0.9)), url(./banner4.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  color: #fff;
}

.s{
  padding-top: 150px;
 
}

//  changes in Nav
//  make a background Transparent in Nav

 <AppBar position="static" sx={{background:"transparent", boxShadow:"none"}}>
