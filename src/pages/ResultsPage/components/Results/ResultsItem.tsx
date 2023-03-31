import checkmark from "../../../../images/checkmark.svg";
import cross from "../../../../images/cross.svg";
import { Answer } from "../../../../redux/trivia/triviaSlice";
import styles from "./Results.module.css";

interface ReslutsItemProps {
  question: string;
  userAnswer: Answer;
  correctAnswer: Answer;
}

function ResultsItem({
  question,
  userAnswer,
  correctAnswer,
}: ReslutsItemProps) {
  const answerIsCorrect = userAnswer === correctAnswer;
  return (
    <div
      className={`${styles.resultItem} ${
        answerIsCorrect ? "" : styles.resultItemIncorrent
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: question }} />
      <img alt="" src={answerIsCorrect ? checkmark : cross} />
    </div>
  );
}

export default ResultsItem;
