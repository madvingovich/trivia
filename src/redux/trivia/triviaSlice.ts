import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Answer = "True" | "False";

export interface Question {
  category: string;
  question: string;
  correct_answer: Answer;
  user_answer: Answer;
}

interface TriviaState {
  loading: boolean;
  questions: Question[];
  error: string | null;
  currentQuestionIndex: number;
  quizDone: boolean;
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

const initialState: TriviaState = {
  questions: [],
  loading: false,
  error: null,
  currentQuestionIndex: 0,
  quizDone: false,
};

export const triviaSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    answerCurrentQuestion: (state, action: PayloadAction<Answer>) => {
      state.questions[state.currentQuestionIndex].user_answer = action.payload;
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.quizDone = true;
      }
    },
    resetState: () => initialState,
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

export const { answerCurrentQuestion, resetState } = triviaSlice.actions;
