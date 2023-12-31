// import a apiService FIle

const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

// TO get an api from Json using apiService file

  const getApi = () => {
    apiService("Products", "", "unauthget")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {})
      .finally(() => {
      });
  };
//  TO post From API

  const onSubmit = (data) => {
    apiService("Products", data, "unauthpost")
      .then((result) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  };

//  TO submit the data using Forms

 <form onSubmit={handleSubmit(onSubmit)} className="forms">
   </form>



