import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Answer = "True" | "False";

export interface Question {
  category: string;
  question: string;
  correct_answer: Answer;
  user_answer?: Answer;
}

interface CounterState {
  loading: boolean;
  questions: Question[];
  error: string | null;
  currentQuestionIndex: number;
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
  currentQuestionIndex: 0,
};

export const triviaSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    nextQuestion: (state, action: PayloadAction<Answer>) => {
      console.log("--> action", action);
      state.questions[state.currentQuestionIndex].user_answer = action.payload;
      state.currentQuestionIndex++;
    },
  },
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

export const { nextQuestion } = triviaSlice.actions;
