import { useCallback, useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback((e: MouseEvent) => {
    if (!selectRef.current?.contains(e.target as HTMLElement)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, [closeDropdown]);

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
      <div ref={selectRef}>
        <span
          onClick={() => setOpen((o) => !o)}
          className={`${styles.input} ${styles.select}`}
        >
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
      </div>
    </InputContainer>
  );
}

export default Select;
