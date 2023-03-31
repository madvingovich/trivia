import userIcon from "../../../../images/user-icon.svg";
import styles from "./ResultHeader.module.css";
import Stars from "./Stars";

function ResultHeader() {
  return (
    <div>
      <div className={styles.container}>
        <img alt="user" src={userIcon} width={35} />
        <span>
          <span className={styles.scoredText}>You scored </span>
          <span className={styles.correctCount}>6</span>
          <span className={styles.totalCount}>/10</span>
        </span>
      </div>
      <Stars correct={6} total={10} />
    </div>
  );
}

export default ResultHeader;
