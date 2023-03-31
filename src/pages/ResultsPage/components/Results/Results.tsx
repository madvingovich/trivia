import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { PATHS } from "../../../../router";
import ResultsItem from "./ResultsItem";

function Results() {
  const { questions, quizDone } = useAppSelector((state) => state.trivia);
  const navigate = useNavigate();
  useEffect(() => {
    if (!quizDone) {
      navigate(PATHS.quiz);
    }
  }, [quizDone, navigate]);

  return (
    <div>
      {questions.map((question, index) => (
        <ResultsItem key={index} question={question} />
      ))}
    </div>
  );
}

export default Results;
