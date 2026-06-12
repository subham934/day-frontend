import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import themeReducer from "./features/ThemeSlice";
export const store = configureStore({
  reducer: {
    count: counterReducer,
    theme: themeReducer,
  },
});

