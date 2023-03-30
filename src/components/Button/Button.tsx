import React, { SyntheticEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "default" | "action" | "confirm";
  text: string;
  onClick: (e: SyntheticEvent) => void;
}

interface Mapping {
  [propName: string]: string;
}

const BUTTON_STYLE_TYPE_MAPPINT: Mapping = {
  action: styles.actionButton,
  confirm: styles.confirmButton,
};

function Button({ type = "default", text, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${BUTTON_STYLE_TYPE_MAPPINT[type] || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
