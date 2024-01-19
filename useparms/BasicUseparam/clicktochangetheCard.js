// logic
const DisplayProduct = () => {
const [currentimage, setCurrentimage] = useState();

  const { productId } = useParams();

    const getApi = () => {
    apiService(`product/${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  
  useEffect(() => {
    getApi();
  }, [productId]);
  
   const handleImageChange = (newImageURL) => {
    setCurrentImage(newImageURL);
  };
}
 return (

   <div>
    <img src={currentImage} alt="img" className="im1" />

         {data?.variantImages?.map((val) => (
                  <Card key={val.id}>
                    <img
                      src={val.imageURL}
                      alt="img"
                      className="img2"
                      onClick={() => handleimageChange(val.imageURL)}
                    />
                  </Card>
                ))}

   </div>
   
 )
