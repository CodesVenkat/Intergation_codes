 let logoselecetdFile = "";

  const handleFileUpload = (event) => {
    if (event !== null) {
      if (event.target === undefined) {
        logoselecetdFile = event;
      } else {
        logoselecetdFile = event.target.files[0];
      }
      if (logoselecetdFile) {
        var reader = new FileReader();
        var imagetype = logoselecetdFile.type;
        var imagedatatype = imagetype.split("/");
        var img_crt_type = imagedatatype[1];
        if (
          img_crt_type === "jpeg" ||
          img_crt_type === "jpg" ||
          img_crt_type === "png"
        ) {
          var fileValue = logoselecetdFile;
          reader.readAsDataURL(logoselecetdFile);
          reader.onload = () => {
            var logourl1 = reader.result;
            var spl = logourl1.split(",");
            var ImageValue = spl[1];
            var img_name = fileValue.name;
            setValue("imageName", img_name);
            setValue("ImageURL", logourl1);
          };
        }
      }
    }
  };


// return

  <Controller
         name="Image"
                 control={control}
                 defaultValue=""
                 render={({ field }) => (
                   <>
                     <label htmlFor="Image">Upload a Product Image</label>
                     <TextField
                       {...field}
                       fullWidth
                       type="file"
                       onChange={(e) => handleFileUpload(e)}
                     />
