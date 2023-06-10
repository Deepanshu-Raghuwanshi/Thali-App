import { configureStore } from "@reduxjs/toolkit";
import ThaliSlice from "../reducers/ThaliSlice";

export const store = configureStore({
  reducer: {
    thali: ThaliSlice,
  },
});
