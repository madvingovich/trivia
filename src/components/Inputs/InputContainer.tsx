import { ReactNode } from "react";
import styles from "./Inputs.module.css";

interface InputContainerProps {
  className?: string;
  label: string;
  icon: string;
  children: ReactNode;
  onClick?: () => void;
}

function InputContainer({
  label,
  icon,
  className,
  children,
  onClick,
}: InputContainerProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    onClick?.();
  };
  return (
    <div className={className} onClick={handleClick}>
      <div className={styles.label}>
        <img width="25px" src={icon} alt="icon" />
        {label}
      </div>
      {children}
    </div>
  );
}

export default InputContainer;
