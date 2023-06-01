import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import surahReducer from "./slices/surahSlice";
import surahAyatsReducer from "./slices/surahAyatsSlice";

const store = configureStore({
  reducer: {
    getSurah: surahReducer,
    getSurahsInfo: surahReducer,
    getSurahAyats: surahAyatsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
