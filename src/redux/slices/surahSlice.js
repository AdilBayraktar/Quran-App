import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurahsInfo = createAsyncThunk("getSurahsInfo", async () => {
  return await axios.get("https://api.alquran.cloud/v1/surah");
});

export const getSurah = createAsyncThunk("getSurah", async (id) => {
  return await axios.get(`http://api.alquran.cloud/v1/surah/${id}`);
});

const surahSlice = createSlice({
  name: "surah",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSurah.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSurah.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSurah.rejected, (state, action) => {
      console.log("Error: ", action.payload);
    });
    builder.addCase(getSurahsInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSurahsInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSurahsInfo.rejected, (state, action) => {
      console.log("Error: ", action.payload);
    });
  },
});

export default surahSlice.reducer;
