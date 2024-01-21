import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import apiService from "./apiService";
import { Button, TextField } from "@mui/material";

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
      .finally(() => {});
  };

  const OnclickSubmit = (data) => {
    apiService("posts", data, "unauthpost")
      .then(() => {
        getAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(OnclickSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          rules={{
            required: "Name is required",
            minLength: {
              value: 2,
              message: "min 2 characters ",
            },
            maxLength: {
              value: 6,
              message: "maximum length should be 6 characters",
            },
          }}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                //  fullWidth
                label="Name"
                //  error={!!formState.errors.name}
              />
              {formState.errors.name && (
                <p style={{ color: "red" }}>{formState.errors.name.message}</p>
              )}
            </>
          )}
        />

        <Button type="submit"> Submit</Button>
      </form>

      {data &&
        data.map((item, Index) => (
          <ul key={Index}>
            <li>{item.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default PostAPI;
