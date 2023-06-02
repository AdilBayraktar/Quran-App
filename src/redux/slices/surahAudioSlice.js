import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurahAudio = createAsyncThunk(
  "getSurahAudio",
  async (recitationId, surah) => {
    console.log("1", surah);
    console.log("2", recitationId);
    return await axios.get(
      `https://api.quran.com/api/v4/chapter_recitations/${recitationId}/${surah}`
    );
  }
);

const surahAudioSlice = createSlice({
  name: "surahAudio",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSurahAudio.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSurahAudio.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSurahAudio.rejected, (state, action) => {
      console.log("Error", action.payload);
    });
  },
});

export default surahAudioSlice.reducer;
