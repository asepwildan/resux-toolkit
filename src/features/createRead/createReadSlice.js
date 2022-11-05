import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("createRead/getData", () => {
  return axios
    .get("https://636644f8046eddf1bafc785d.mockapi.io/users")
    .then((res) => res.data);
});
export const postData = createAsyncThunk(
  "createRead/postData",
  (id, product) => {
    return axios
      .post("https://636644f8046eddf1bafc785d.mockapi.io/users", {
        id,
        product,
      })
      .then((res) => getData());
  }
);

export const createRead = createSlice({
  name: "createRead",
  loading: false,
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const todo = {
        id: action.payload.id,
        product: action.payload.product,
      };

      state.products.push(todo);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.products = [];
      state.loading = false;
    });
    builder.addCase(postData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postData.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = createRead.actions;

export default createRead.reducer;
