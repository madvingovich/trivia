import emptyStar from "images/star-empty.svg";
import filledStar from "images/star-filled.svg";
import styles from "./ResultHeader.module.css";
import { createStarTypesArray } from "./utils";

interface StarsProps {
  correct: number;
  total: number;
}

export type StarType = "filled" | "empty";

const STAR_TYPE_MAP: Record<StarType, string> = {
  filled: filledStar,
  empty: emptyStar,
};

function Star({ type }: { type: StarType }) {
  return <img alt="star" src={STAR_TYPE_MAP[type]} />;
}

function Stars({ correct, total }: StarsProps) {
  return (
    <div className={styles.starsContainer}>
      {createStarTypesArray(correct, total).map((type: StarType, index) => (
        <Star type={type} key={index} />
      ))}
    </div>
  );
}

export default Stars;
