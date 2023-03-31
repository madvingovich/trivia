import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Answer = "Trus" | "False";

interface Question {
  category: string;
  question: string;
  correct_answer: Answer;
  user_answer: Answer | undefined;
}

interface CounterState {
  loading: boolean;
  questions: Question[];
  error: string | null;
}

interface TriviaResponse {
  response_code: number;
  results: Question[];
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
    builder.addCase(
      fetchQuestions.fulfilled,
      (state, action: PayloadAction<TriviaResponse>) => {
        state.loading = false;
        state.questions = action.payload.results;
      }
    );
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.loading = false;
      state.error = "ERROR";
    });
  },
});
