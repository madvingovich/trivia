import { SelectProps } from "../Inputs.types";
import styles from "../Inputs.module.css";

function Options({
  options,
  onChange,
}: Pick<SelectProps, "options" | "onChange">) {
  return (
    <div className={styles.options}>
      {options.map(({ label, value }) => (
        <div
          key={value}
          className={styles.option}
          onClick={() => onChange(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default Options;
