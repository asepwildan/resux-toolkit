import { configureStore } from "@reduxjs/toolkit";
import createRead from "../features/createRead/createReadSlice";
export const store = configureStore({
  reducer: {
    createRead,
  },
});
