<Route path='/parms/:id' element={<ParamsCrds/>}/>


const navigate = useNavigate();

  const oneData = (e,data)=>{
    navigate(/parms/${data?.id},{
      state:data
    })
  }
