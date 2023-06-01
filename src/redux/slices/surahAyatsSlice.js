import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurahAyats = createAsyncThunk("getSurahAyats", async (id) => {
  return await axios.get(`http://api.alquran.cloud/v1/surah/${id}`);
});

const surahAyatsSlice = createSlice({
  name: "surahAyats",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSurahAyats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSurahAyats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSurahAyats.rejected, (state, action) => {
      console.log("Error: ", action.payload);
    });
  },
});
export default surahAyatsSlice.reducer;
