import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import { Option } from "../../components/Inputs/InputProps.interface";
import Select from "../../components/Inputs/Select";
import TextInput from "../../components/Inputs/TextInput";
import TriviaLogo from "../../components/TriviaLogo";
import AmountIcon from "../../images/AmountIcon.svg";
import DifficultyIcon from "../../images/DifficultyIcon.svg";
import { fetchQuestions } from "../../redux/trivia/triviaSlice";
import { PATHS } from "../../router";
import Background from "./Background";
import styles from "./WelcomePage.module.css";

const SELECT_OPTIONS: Option[] = [
  { label: "Easy", value: "easy" },
  { label: "Hard", value: "hard" },
];

function WelcomePage() {
  const [difficulty, setDifficulty] = useState(SELECT_OPTIONS[0].value);
  const navigage = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.trivia.loading);

  const startTrivia = () => {
    dispatch(fetchQuestions(difficulty)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        navigage(PATHS.quiz);
      }
    });
  };

  return (
    <div className={styles.container}>
      <Background />
      <div>
        <h1 className={styles.h1}>Welcome To the</h1>
        <TriviaLogo />
      </div>
      <div className={styles.contentContainer}>
        <Select
          className={styles.inputMargin}
          label="Difficulty"
          icon={DifficultyIcon}
          value={difficulty}
          onChange={setDifficulty}
          options={SELECT_OPTIONS}
        />
        <TextInput
          label="Amount"
          icon={AmountIcon}
          value="2 889 868"
          onChange={() => {}}
        />
      </div>
      <div className={`${styles.contentContainer} ${styles.buttonContainer}`}>
        <Button
          type="action"
          text="TRUE"
          onClick={startTrivia}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export default WelcomePage;
