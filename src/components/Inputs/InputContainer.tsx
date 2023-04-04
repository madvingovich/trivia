import { InputContainerProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function InputContainer({
  label,
  icon,
  className,
  children,
}: InputContainerProps) {
  return (
    <div className={className}>
      <div className={styles.label}>
        <img width="25px" src={icon} alt="icon" />
        {label}
      </div>
      {children}
    </div>
  );
}

export default InputContainer;
