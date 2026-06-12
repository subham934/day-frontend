import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("/fetch/getData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: false,
    data: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
