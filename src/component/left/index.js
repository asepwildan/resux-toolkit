import React, { useState } from "react";
import styles from "./left.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  addProduct,
  postData,
} from "../../features/createRead/createReadSlice";

export default function Left() {
  const [values, setValues] = useState({ id: "", product: "" });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addProduct(values));
    dispatch(postData(values));
  };
  return (
    <div className={styles.container}>
      <Box
        onSubmit={submitHandler}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        id="my-form"
      >
        <TextField
          onChange={(e) => setValues({ ...values, id: e.target.value })}
          id="standard-basic"
          label="ID"
          variant="standard"
          type="number"
        />
        <TextField
          onChange={(e) => setValues({ ...values, product: e.target.value })}
          id="standard-basic"
          label="Product Name"
          variant="standard"
        />
      </Box>
      <div className={styles.buttonContainer}>
        <Button variant="contained" type="submit" form="my-form">
          Contained
        </Button>
      </div>
    </div>
  );
}
