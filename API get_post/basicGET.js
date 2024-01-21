import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiService from "./apiService";

const PostAPI = () => {
  const [data, setData] = useState();

  const { control, handleSubmit, formState } = useForm();

  const getAPI = () => {
    apiService("posts", "", "unauthget")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
        {data &&
          data.map((a, i) => (
            <ul key={i}>
              <li>{a.name}</li>
            </ul>
          ))}
    </div>
  );
};

export default PostAPI;

// JSON

{
    "posts":[{
        "name":"hi"
    }]
}
