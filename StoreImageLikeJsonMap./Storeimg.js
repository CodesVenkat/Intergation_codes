// import and export the images
// Product.js

import PRODUCT1 from './Products/f-p-1.jpg.webp'
import PRODUCT2 from './Products/f-p-4.jpg.webp'
import PRODUCT3 from './Products/f-p-4.jpg.webp'
import PRODUCT4 from './Products/f-p-5.jpg.webp'

import CLOGO1 from './c-logo-1.png.webp'
import CLOGO2 from './c-logo-2.png.webp'
import CLOGO3 from './c-logo-3.png.webp'
import CLOGO4 from './c-logo-4.png.webp'
import CLOGO5 from './c-logo-5.png.webp'



export const product1 = PRODUCT1;
export const product2 = PRODUCT2;
export const product3 = PRODUCT3;
export const product4 = PRODUCT4;


export const clogo1 = CLOGO1;
export const clogo2 = CLOGO2;
export const clogo3 = CLOGO3;
export const clogo4 = CLOGO4;
export const clogo5 = CLOGO5;

// store images like JSON
// data.js

import { product1, product2, product3, product4 } from "../../Assets/Product";

export const arrival = [
    {
        img : product1,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product2,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product3,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product4,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product1,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product4,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product1,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product3,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product1,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    },
    {
        img : product4,
        title:"Long Sleeve TShirt",
        price:"$150.00"
    }
]

// map the data using the name of arrival
// Fourthpage.js

import { Container, Grid, Pagination } from '@mui/material'
import React from 'react'
import { arrival } from './imgdata/data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paginations from './Paginations'
const Fourthpage = () => {
  return (
    
      
<Container>
<div>
 <div style={{textAlign:"center" ,marginTop:"50px"}}>
  <h1>Featured Products</h1>
  <p>Who are in extremely love with eco friendly system.</p>
 </div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  // gap={2}
  spacing={5}
  sx={{ textAlign: 'center', justifyContent: 'center',alignItems:'center' }}
>
{
  arrival && arrival.map((a,i)=>{
    return(
        <Grid item lg={2.25}  sm={6} md={4} sx={12}key={i} >
              <Card style={{ width: '10rem'}}>
      <Card.Img variant="top" src={a.img} width="110%" />
      <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text>
           {a.price}
        </Card.Text>
      </Card.Body>
    </Card>
           
        </Grid>
    )
  })
  
}

</Grid>
<div style={{display:"flex", justifyContent:"center", padding:"50px"}}>
<Paginations/>
</div>
</div>
</Container>
   
  )
}

export default Fourthpage
