import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { triviaSlice } from "../redux/trivia/triviaSlice";

export const store = configureStore({
  reducer: {
    trivia: triviaSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
