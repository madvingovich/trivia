import userIcon from "images/user-icon.svg";
import styles from "./ResultHeader.module.css";
import Stars from "./Stars";

interface ResultHeaderProps {
  correctAnswers: number;
  questionsCount: number;
}

function ResultHeader({ correctAnswers, questionsCount }: ResultHeaderProps) {
  return (
    <div>
      <div className={styles.container}>
        <img alt="user" src={userIcon} width={35} />
        <span>
          <span className={styles.scoredText}>You scored </span>
          <span className={styles.correctCount}>{correctAnswers}</span>
          <span className={styles.totalCount}>/{questionsCount}</span>
        </span>
      </div>
      <Stars correct={correctAnswers} total={questionsCount} />
    </div>
  );
}

export default ResultHeader;
