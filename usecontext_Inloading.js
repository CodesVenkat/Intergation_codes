// use context hook is used to share a date from one compoenent to another component
// LodingContext.js
// parent Componet 
// create context to share data


import React, { createContext, useContext, useState } from 'react';

// Create a context to share loading state
const ProgressContext = createContext();

// Create a custom hook to consume the loading context
export const useProgressBar = () => useContext(ProgressContext);

function LoadingContext({ children }) {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* Provide the loading state and setter function through the context */}
      <ProgressContext.Provider value={{ loading, setLoading }}>
        {/* Render the children components */}
        {children}
      </ProgressContext.Provider>
    </div>
  );
}

export default LoadingContext;




// to get a data from usecontext
// where the file you want
 const{loading,setLoading}=useProgressBar();



  const getApi = () => {
    setLoading(true);
    // apiService("Products", "", "unauthget")
    //   .then((result) => {
    //     setData(result.data);
    //   })
    //   .catch((err) => {})
    //   .finally(() => {
        setLoading(false);
  //     });
  // };

  const onSubmit = (data) => {
    setLoading(true);
    // apiService("Products", data, "unauthpost")
    //   .then((result) => {
    //     getApi();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
        setLoading(false);
  //     });
  // };

// To implement a code
    // in where the laoding wants to come
     {
      loading?(<Loading/>):( 
        //code 
        )}

    // TO import the file
        <LoadingContext>
    
    <Routes>
      
      <Route path="/" element={<Main />} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Customercrd" element={<CustomerCrd />} />
    </Routes>
    </LoadingContext>
    
