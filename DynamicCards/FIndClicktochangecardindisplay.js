
// clicktochangecard 
apiService("product/variants/list", req, "unauthpost")
    .then((result) => {
      const variants = result.data.responseModelList;

      variants.forEach((variant) => {
        if (variant.defaultVariant === 1) {
          const defaultImage = variant.variantImages.find((image) => image.defaultImage === 1);

          setCurrentImage(defaultImage ? defaultImage.imageURL : null);
        }
      });

      setVariants(variants);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
};


// map

<div>
  {variant &&
    variant.map((val) => (
      <div key={val.id}>
        {val.variantImages.map((image) => (
          <div key={image.id}>
            <img src={image.imageURL} alt="" />
            {/* You may include additional details for each variant image */}
            {/* <p>{val.amount}</p> */}
          </div>
        ))}
      </div>
    ))}
</div>
