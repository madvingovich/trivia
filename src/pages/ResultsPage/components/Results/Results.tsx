import { Question } from "../../../../redux/trivia/triviaSlice";
import ResultsItem from "./ResultsItem";

interface ResultsProps {
  questions: Question[];
}

function Results({ questions }: ResultsProps) {
  return (
    <div>
      {questions.map((question, index) => (
        <ResultsItem
          key={index}
          question={question.question}
          correctAnswer={question.correct_answer}
          userAnswer={question.user_answer}
        />
      ))}
    </div>
  );
}

export default Results;
