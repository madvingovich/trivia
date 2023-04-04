import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  Difficulty,
  changeDifficulty,
  fetchQuestions,
} from "app/slices/triviaSlice";
import Button from "components/Button/Button";
import { Option } from "components/Inputs/Inputs.types";
import Select from "components/Inputs/Select/Select";
import TextInput from "components/Inputs/TextInput";
import TriviaLogo from "components/TriviaLogo";
import AmountIcon from "images/AmountIcon.svg";
import DifficultyIcon from "images/DifficultyIcon.svg";
import { useNavigate } from "react-router-dom";
import { PATHS } from "router";
import styles from "./WelcomePage.module.css";
import Background from "./components/Background/Background";

const SELECT_OPTIONS: Option[] = [
  { label: "Easy", value: "easy" },
  { label: "Hard", value: "hard" },
];

function WelcomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, difficulty } = useAppSelector((state) => state.trivia);

  const startTrivia = () => {
    dispatch(fetchQuestions(difficulty)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        navigate(PATHS.quiz);
      }
    });
  };

  const handleDifficultyChange = (difficulty: Difficulty) => {
    dispatch(changeDifficulty(difficulty));
  };

  return (
    <div className={styles.container}>
      <Background />
      <div>
        <h1 className={styles.h1}>Welcome To the</h1>
        <TriviaLogo className={styles.logo} />
      </div>
      <div className={styles.inputsContainer}>
        <Select
          className={styles.inputMargin}
          label="Difficulty"
          icon={DifficultyIcon}
          value={difficulty}
          onChange={(difficulty) =>
            handleDifficultyChange(difficulty as Difficulty)
          }
          options={SELECT_OPTIONS}
        />
        <TextInput
          label="Amount"
          icon={AmountIcon}
          value="2 889 868"
          onChange={() => {}}
        />
      </div>
      <div className={styles.buttonContainer}>
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
