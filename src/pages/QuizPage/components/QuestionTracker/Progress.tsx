import { getProgressWidth } from "pages/QuizPage/utils";
import styles from "./QuestionTracker.module.css";
import { QuestionTrackerProps } from "./QuestionTrackerProps.interface";

function Progress({ question, totalQuestions }: QuestionTrackerProps) {
  return (
    <span className={styles.progressContainer}>
      <span
        className={styles.progressResult}
        style={{ width: getProgressWidth(question, totalQuestions) }}
      ></span>
    </span>
  );
}

export default Progress;
