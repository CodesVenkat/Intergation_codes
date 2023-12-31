// import a apiService FIle

const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

// TO get an api from Json using apiService file

// Function to fetch data from the API
const getApi = () => {
  apiService("Products", "", "unauthget")
    .then((result) => {
      // When the API request is successful, update the data state
      setData(result.data);
    })
    .catch((err) => {
      // Handle any errors that occur during the API request
    })
    .finally(() => {
      // This block will be executed regardless of success or failure
    });
};

//  TO post From API

// Function to submit data to the API on form submission.
const onSubmit = (data) => {
  // Making a POST request to the "Products" endpoint with the form data
  apiService("Products", data, "unauthpost")
    .then((result) => {
      // After a successful post, fetch the updated data from the API
      getApi();
    })
    .catch((err) => {
      // Log any errors that occur during the API post request
      console.log(err);
    })
    .finally(() => {
      // This block will be executed regardless of success or failure
    });
};


//  TO submit the data using Forms

 <form onSubmit={handleSubmit(onSubmit)} className="forms">
   </form>



