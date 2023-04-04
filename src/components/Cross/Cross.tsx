import styles from "./Cross.module.css";
import cross from "images/cross.svg";
import whiteCross from "images/cross-white.svg";

type CrossType = "white" | "blue";

interface CrossProps {
  type: CrossType;
  onClick?: () => void;
}

const CROSS_TYPE_MAPPING: Record<CrossType, string> = {
  blue: cross,
  white: whiteCross,
};

function Cross({ type, onClick }: CrossProps) {
  return (
    <img
      onClick={onClick}
      className={styles.cross}
      src={CROSS_TYPE_MAPPING[type]}
      alt="cross"
    />
  );
}

export default Cross;
