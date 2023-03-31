import { Question as IQuestion } from "redux/trivia/triviaSlice";
import QuestionTracker from "../QuestionTracker/QuestionTracker";
import styles from "./Question.module.css";

interface QuestionProps {
  question: IQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
}

function Question({
  question,
  currentQuestionIndex,
  totalQuestions,
}: QuestionProps) {
  return (
    <>
      <h1 className={styles.category}>{question.category}</h1>
      <p className={styles.level}>level 1</p>
      <QuestionTracker
        question={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />
      <h2
        className={styles.question}
        dangerouslySetInnerHTML={{ __html: question.question }} //assuming api is save
      />
    </>
  );
}

export default Question;
