import filledStar from "../../../../images/star-filled.svg";
import emptyStar from "../../../../images/star-empty.svg";
import styles from "./ResultHeader.module.css";

interface StarsProps {
  correct: number;
  total: number;
}

type StarType = "filled" | "empty";

const STAR_TYPE_MAP: Record<StarType, string> = {
  filled: filledStar,
  empty: emptyStar,
};

const createArray = (length: number, fill: unknown = null) =>
  new Array(length).fill(fill);

function Star({ type }: { type: StarType }) {
  return <img alt="star" src={STAR_TYPE_MAP[type]} />;
}

function Stars({ correct, total }: StarsProps) {
  return (
    <div className={styles.starsContainer}>
      {createArray(correct).map((_, index) => (
        <Star type="filled" key={index} />
      ))}
      {createArray(total - correct).map((_, index) => (
        <Star type="empty" key={index} />
      ))}
    </div>
  );
}

export default Stars;
