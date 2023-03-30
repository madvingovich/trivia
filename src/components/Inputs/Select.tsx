import React from "react";
import InputContainer from "./InputContainer";
import { Option, SelectProps } from "./InputProps.interface";
import styles from "./Inputs.module.css";

function Select({
  label,
  icon,
  value,
  onChange,
  className,
  options,
}: SelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleOptionSelect = (value: Option["value"]) => {
    onChange(value);
    setOpen(false);
  };

  const selectedOptionLabel: Option["value"] =
    options.find((o) => o.value === value)?.label || "";

  return (
    <InputContainer
      className={`${className} ${styles.selectContainer}`}
      label={label}
      icon={icon}
    >
      <span onClick={() => setOpen(true)} className={styles.input}>
        {selectedOptionLabel}
      </span>
      {open ? (
        <div className={styles.options}>
          {options.map(({ label, value }) => (
            <div
              className={styles.option}
              onClick={() => handleOptionSelect(value)}
            >
              {label}
            </div>
          ))}
        </div>
      ) : null}
    </InputContainer>
  );
}

export default Select;
