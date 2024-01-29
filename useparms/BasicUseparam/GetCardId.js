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
export default function CustomerCard() {
  const Navigate = useNavigate()
  
 const handleShow=(productId)=>{
 Navigate(`/DisplayProduct/${productId}`)
 console.log(productId);  }

    return (
        <Card sx={{ maxWidth: 345 }} key={i}
                >
                  <CardMedia
                    sx={{ height: 200,width:"100%",maxWidth:"142px",margin:"0px auto" }}
                    image={a.imageURL}
                    title="green iguana"
                    onClick={()=>handleShow(a.productId)}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{a.categoryType}</Typography>
                    <Typography gutterBottom variant="h5" component="div" >
                     <h5>{a.productName}</h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>{a.Description}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" >BUY NOW</Button>
                    <Button variant="outlined" >ADD TO CART</Button>
                  </CardActions>
                </Card>
)};

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
