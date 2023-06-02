import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRecitations = createAsyncThunk(
  "getAllRecitations",
  async () => {
    return await axios.get(
      "https://api.quran.com/api/v4/resources/recitations?language=ar"
    );
  }
);

const recitationsSlice = createSlice({
  name: "recitations",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRecitations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllRecitations.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRecitations.rejected, (state, action) => {
      console.log("Error", action.payload);
    });
  },
});

export default recitationsSlice.reducer;
