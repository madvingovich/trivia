import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Answer = "Trus" | "False";

interface Question {
  question: string;
  correct_answer: Answer;
  user_answer: Answer | undefined;
}

interface CounterState {
  loading: boolean;
  questions: Question[];
  error: string | null;
}

export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async (difficulty: string) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`
    );
    return response.json();
  }
);

const initialState: CounterState = {
  questions: [],
  loading: false,
  error: null,
};

export const triviaSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload.results;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.loading = false;
      state.error = "ERROR";
    });
  },
});
