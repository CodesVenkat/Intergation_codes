import React, { useEffect, useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
const Addrow = () => {
    const {
        handleSubmit,
        control,
        setValue,
        clearErrors,
        reset,
        formState: { errors },
      } = useForm({});
      const [files, setFiles] = useState([]);
      const [uploading, setUploaded] = useState(false);
      const [success, setSuccess] = useState(false);
    
      const handleFileUpload = (event) => {
        debugger
        const selectedFiles = event.target.files;
        debugger
        // Process each selected file
        Array.from(selectedFiles).forEach((file) => {
          // Check file size
          debugger
          if (file.size > 2 * 1024 * 1024) {
            // File size exceeds 2MB, notify user
            console.error('File size exceeds 2MB');
            return; // Stop further processing
          }
          debugger
          // Process file if it meets size criteria
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const fileData = {
              fileName: file.name,
              fileurl: reader.result,
            };
            debugger
            setFiles((prevFiles) => [...prevFiles, fileData]);
            debugger
          };
        });
      };
    
      const handleAddNew = () => {
        // Trigger file input click to select new file
        const fileInput = document.getElementById('upload-file');
        if (fileInput) {
          fileInput.click();
        }
      };
      const handleDelete = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
      };
      const handleSubmits = () => {
        console.log(files);
        // Here you can perform any additional actions such as submitting the files to a server
      };
  return (
    <div>
    <div className="container">
    <button className="upload mt-4" onClick={handleAddNew}>
            <i class="fas fa-cloud-upload-alt"></i>
            <span className="ml-2">Add File</span>
          </button>
      <div className="d-flex flex-wrap">
        <div>
          {/* Hidden file input to trigger file selection */}
          
          <input
            type="file"
            id="upload-file"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            multiple // Allow multiple file selection
          />
        </div>
  
        {/* Display uploaded files */}
        {files.map((file, index) => (
          <div key={index} className="image-size img-fluid mt-2 mr-2">
            <img src={file.fileurl} alt={file.fileName} />
            <div className="text-center">
            <p>{file.fileName}</p>
            <i
              class="fas fa-trash-alt text-danger ml-2"
              onClick={() => handleDelete(index)}
            ></i>
            </div>
          </div>
        ))}
  
  </div>
        <div>
          <br />
          <button className="submit" onClick={handleSubmits}>
            Submit
          </button>
        </div>
      
    </div>
  </div>
  
  )
}

export default Addrow


// css


.image-size img{
  width: 245px;
height: 200px;
object-fit: contain;
border: 2px solid gray;
padding: 15px;
box-shadow: 0px 0px 6px 0px;
border-radius: 15px;
}
.upload{
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  background-color: cadetblue;
}
.submit{
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  background-color: burlywood;
}
