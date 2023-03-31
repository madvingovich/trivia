import React from "react";
import { Answer, Question } from "../../../../redux/trivia/triviaSlice";
import styles from "./Results.module.css";
import checkmark from "../../../../images/checkmark.svg";
import cross from "../../../../images/cross.svg";

const ANSWER_TYPE_IMAGE_MAPPING: Record<Answer, string> = {
  True: checkmark,
  False: cross,
};

function ResultsItem({ question }: { question: Question }) {
  return (
    <div
      className={`${styles.resultItem} ${
        question.user_answer === "True" ? styles.resultItemIncorrent : ""
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: question.question }} />
      <img alt="" src={ANSWER_TYPE_IMAGE_MAPPING[question.user_answer]} />
    </div>
  );
}

export default ResultsItem;
