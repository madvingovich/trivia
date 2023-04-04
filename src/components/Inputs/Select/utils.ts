import styles from "../Inputs.module.css";

export const getSelectClassName = (open: boolean) =>
  `${styles.input} ${styles.select} ${open ? styles.selectOpen : ""}`;
