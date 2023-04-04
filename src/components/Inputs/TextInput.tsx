import InputContainer from "./InputContainer";
import { InputProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function TextInput({ label, icon, value, onChange, className }: InputProps) {
  return (
    <InputContainer className={className} label={label} icon={icon}>
      <input
        className={styles.input}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </InputContainer>
  );
}

export default TextInput;
