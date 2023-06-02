import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import surahReducer from "./slices/surahSlice";
import surahAyatsReducer from "./slices/surahAyatsSlice";
import recitationsReducer from "./slices/recitationsSlice";
import surahAudioReducer from "./slices/surahAudioSlice";

const store = configureStore({
  reducer: {
    getSurah: surahReducer,
    getSurahsInfo: surahReducer,
    getSurahAyats: surahAyatsReducer,
    getAllRecitations: recitationsReducer,
    getSurahAudio: surahAudioReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
