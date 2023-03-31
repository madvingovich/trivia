import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import {
  Answer,
  finishQuiz,
  nextQuestion,
} from "../../redux/trivia/triviaSlice";
import { PATHS } from "../../router";
import Background from "./components/Background/Background";
import Question from "./components/Question/Question";
import styles from "./QuizPage.module.css";

function QuizPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, quizDone } = useAppSelector(
    (state) => state.trivia
  );

  useEffect(() => {
    if (!questions.length) {
      navigate(PATHS.index);
    }
  }, [questions, navigate]);

  useEffect(() => {
    if (quizDone) {
      navigate(PATHS.results);
    }
  }, [quizDone, navigate]);

  const goToNextQuestion = (answer: Answer) => () => {
    if (currentQuestionIndex + 1 < questions.length) {
      dispatch(nextQuestion(answer));
    } else {
      dispatch(finishQuiz());
    }
  };

  return questions.length ? (
    <div className={styles.container}>
      <Background />
      <Question
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
      <Button
        className={styles.firstButton}
        type="confirm"
        text="TRUE"
        onClick={goToNextQuestion("True")}
      />
      <Button text="FALSE" onClick={goToNextQuestion("False")} />
    </div>
  ) : null;
}

export default QuizPage;
