import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

 const navi = useNavigate()


 const handleloginnavi = ()=>{
     navi("/Login")
 }


 const handlesignupnavi = ()=>{
    navi("/register")
}

  return (
    <div>
   <h1>Welcome to Home page</h1>
   <h1>Hello Guest</h1>
<div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
<Button onClick={handleloginnavi} color='info' variant='contained'>Login</Button>
   <Button onClick={handlesignupnavi}  color='info'  variant='contained' >Signin</Button>
</div>

    </div>
  )
}

export default HomePage