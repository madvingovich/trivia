import { configureStore } from "@reduxjs/toolkit";
import { triviaSlice } from "./slices/triviaSlice";

export const store = configureStore({
  reducer: {
    trivia: triviaSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
