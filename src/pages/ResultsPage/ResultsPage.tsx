import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  Question,
  fetchQuestions,
  resetCurrentQuestion,
} from "app/slices/triviaSlice";
import Button from "components/Button/Button";
import Cross from "components/Cross/Cross";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "router";
import styles from "./ResultsPage.module.css";
import Background from "./components/Background/Background";
import ResultHeader from "./components/ResultHeader/ResultHeader";
import Results from "./components/Results/Results";
import { useCancelQuiz } from "hooks/useCancelQuiz";

const filterCorrect = (q: Question) => q.correct_answer === q.user_answer;

function ResultsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, questions, quizDone, difficulty } = useAppSelector(
    (state) => state.trivia
  );

  const cancelQuiz = useCancelQuiz();

  useEffect(() => {
    if (!quizDone) {
      navigate(PATHS.quiz);
    }
  }, [quizDone, navigate]);

  const handlePlayAgain = () => {
    dispatch(fetchQuestions(difficulty)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        dispatch(resetCurrentQuestion());
        navigate(PATHS.quiz);
      }
    });
  };

  return (
    <div className={styles.container}>
      <Background />
      <Cross type="white" onClick={cancelQuiz} />
      <ResultHeader
        correctAnswers={questions.filter(filterCorrect).length}
        questionsCount={questions.length}
      />
      <div className={styles.resultsContainer}>
        <Results questions={questions} />
      </div>
      <Button
        type="action"
        text="PLAY AGAIN"
        onClick={handlePlayAgain}
        disabled={loading}
      />
    </div>
  );
}

export default ResultsPage;
