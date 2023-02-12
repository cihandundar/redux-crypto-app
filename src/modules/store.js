import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "redux/coinSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    coinReducer: coinSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
