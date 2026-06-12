import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fatchUser } from "../../services/api";

const fatchUserData = createAsyncThunk("/fetch/users", async () => {
  try {
    const data = await fatchUser();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fatchUserData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fatchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fatchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export { fatchUserData };