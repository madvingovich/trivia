import { useAppDispatch, useAppSelector } from "app/hooks";
import Button from "components/Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Answer, answerCurrentQuestion } from "redux/trivia/triviaSlice";
import { PATHS } from "router";
import styles from "./QuizPage.module.css";
import Background from "./components/Background/Background";
import Question from "./components/Question/Question";

function QuizPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, quizDone } = useAppSelector(
    (state) => state.trivia
  );

  useEffect(() => {
    if (!questions.length) {
      navigate(PATHS.index);
    } else if (quizDone) {
      navigate(PATHS.results);
    }
  }, [questions, quizDone, navigate]);

  const answerQuestion = (answer: Answer) => () => {
    dispatch(answerCurrentQuestion(answer));
  };

  return questions.length ? (
    <div className={styles.container}>
      <Background />
      <Question
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
      <div className={styles.buttonsContainer}>
        <Button
          className={styles.firstButton}
          type="confirm"
          text="TRUE"
          onClick={answerQuestion("True")}
        />
        <Button text="FALSE" onClick={answerQuestion("False")} />
      </div>
    </div>
  ) : null;
}

export default QuizPage;
