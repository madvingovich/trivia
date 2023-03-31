import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import { Question } from "../../redux/trivia/triviaSlice";
import { PATHS } from "../../router";
import Background from "./components/Background/Background";
import ResultHeader from "./components/ResultHeader/ResultHeader";
import Results from "./components/Results/Results";
import styles from "./ResultsPage.module.css";

const filterCorrect = (q: Question) => q.correct_answer === q.user_answer;

function ResultsPage() {
  const { questions, quizDone } = useAppSelector((state) => state.trivia);
  const navigate = useNavigate();

  useEffect(() => {
    if (!quizDone) {
      navigate(PATHS.quiz);
    }
  }, [quizDone, navigate]);

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
      <Button type="action" text="PLAY AGAIN" onClick={() => {}} />
    </div>
  );
}

export default ResultsPage;
