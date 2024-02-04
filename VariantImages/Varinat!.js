import React, { useEffect, useState } from "react";
import apiService from "../services/apiService";
import { useParams } from "react-router-dom";
import Loading from "./../Context/Loading";
import { Grid } from "@mui/material";

const Productdisplay = () => {
  const [datas, setdatas] = useState();
  const [currentImage, setCurrentImage] = useState();
  const [variant, setVariant] = useState();
const[newimg,setNewimg]=useState()

  const { productId } = useParams();

  const getAPI = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((res) => {
        setdatas(res.data);
        console.log(res.data);
        if (res.data.numberOfVariants === 0) {
          setNewimg(res.data.variantImages);
          res.data.variantImages.forEach((element) => {
            if (element.defaultImage === 1) {
              setCurrentImage(element.imageURL);
            }
          });
        }else{
          getVariantApi();

        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };


  const getVariantApi = () =>{
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
     apiService("product/variants/list",req,"unauthpost").then((result) => {
        console.log(result.data);
        result.data.responseModelList.forEach(element => {
           if(element.defaultVariant===1){
            setNewimg(element.variantImages)
              element.variantImages.forEach((val)=>{
                if(val.defaultImage===1){
                   setCurrentImage(val.imageURL)
                }
              })
           }
        }); 
     }).catch((err) => {
      
     });
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={6}>
        <div>
          {currentImage ? (
            <>
              <img src={currentImage} alt="img" style={{width:"500px"}}/>
            </>
          ) : (
            <Loading />
          )}
        </div>

        <div>
          {variant &&
            variant.map((a) => (
              <img
                src={a.imageURL}
                alt="img"
                key={a.id}
                onClick={() => setCurrentImage(a.imageURL)}
                style={{ width: "80px", height: "80px" }}
              />
            ))}
        </div>
   

<div style={{display:"flex"}}>
{newimg && newimg.map((val)=>(
       <div >
        <img src={val.imageURL} alt="img"  key={val.id} style={{width:"100px"}} onClick={()=>setCurrentImage(val.imageURL)} />
       </div>
   ))}
</div>
        
        

      </Grid>

      <Grid item md={6}>
        <h2>HI</h2>
      </Grid>
    </Grid>
  );
};

export default Productdisplay;
