import { getQuestionNumber } from "pages/QuizPage/utils";
import Progress from "./Progress";
import styles from "./QuestionTracker.module.css";
import { QuestionTrackerProps } from "./QuestionTrackerProps.interface";

function QuestionTracker({ question, totalQuestions }: QuestionTrackerProps) {
  return (
    <div className={styles.container}>
      <span className={styles.question}>{getQuestionNumber(question)}</span>/
      <span className={styles.total}>{totalQuestions}</span>
      <Progress question={question} totalQuestions={totalQuestions} />
    </div>
  );
}

export default QuestionTracker;
