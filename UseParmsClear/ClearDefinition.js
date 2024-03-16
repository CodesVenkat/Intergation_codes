// In App.js


 <Routes>
  <Route path="/" element={<Practiceparms />} />
  <Route path="/Actors/:id" element={<DisplayactorImages/>} />
 </Routes>

// parms.js

import React, { useEffect, useState } from "react";
import apiService from "../../API/apiService";
import { useNavigate } from "react-router-dom";

const Practiceparms = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    Actorsapi();
  }, []);

  const navi = useNavigate();

  const Actorsapi = () => {
    apiService("ActorsImages.json", null, "unauthget")
      .then((result) => {
        setImages(result.data.ActorsImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleimageclick = (valueid,imageLink) => {
    console.log(valueid);
    console.log(imageLink,"imagelink");
    navi(`/Actors/${valueid}` ,{state:{imageLink}});
  };

  return (
    <div style={{ display: "flex" }}>
      {images &&
        images.map((a, i) => (
          <ul key={a.id}>
            <li>{a.Name}</li>
            <img
              src={a.imageURL}
              alt="img"
              style={{ width: "100px" }}
              onClick={() => handleimageclick(a.id,a.imageURL)}
            />
          </ul>
        ))}
    </div>
  );
};

export default Practiceparms;

// To Display a images

import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DisplayactorImages = () => {
    const {id} =useParams()
     
  const takelocation = useLocation();

    const datas = takelocation?.state?.imageLink

  return (
    <div>
  <h1>{id}</h1>

  <img src={datas} alt="img"  style={{width:"100px"}}/>

    </div>
  )
}

export default DisplayactorImages
