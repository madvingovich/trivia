import { useAppDispatch, useAppSelector } from "app/hooks";
import Button from "components/Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Question, resetState } from "app/slices/triviaSlice";
import { PATHS } from "router";
import styles from "./ResultsPage.module.css";
import Background from "./components/Background/Background";
import ResultHeader from "./components/ResultHeader/ResultHeader";
import Results from "./components/Results/Results";

const filterCorrect = (q: Question) => q.correct_answer === q.user_answer;

function ResultsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { questions, quizDone } = useAppSelector((state) => state.trivia);

  useEffect(() => {
    if (!quizDone) {
      navigate(PATHS.quiz);
    }
  }, [quizDone, navigate]);

  const handlePlayAgain = () => {
    dispatch(resetState());
    navigate(PATHS.index);
  };

  return (
    <div className={styles.container}>
      <Background />
      <ResultHeader
        correctAnswers={questions.filter(filterCorrect).length}
        questionsCount={questions.length}
      />
      <div className={styles.resultsContainer}>
        <Results questions={questions} />
      </div>
      <Button type="action" text="PLAY AGAIN" onClick={handlePlayAgain} />
    </div>
  );
}

export default ResultsPage;
