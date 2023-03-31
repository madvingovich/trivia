import Progress from "./Progress";
import styles from "./QuestionTracker.module.css";
import { QuestionTrackerProps } from "./QuestionTrackerProps.interface";

const getQuestionNumber = (n: number): string | number =>
  String(n).length === 1 ? `0${n}` : n;

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
