import { useDocumentEventListener } from "hooks/useDocumentEventListener";
import arrow from "images/arrow.svg";
import { useCallback, useRef, useState } from "react";
import { Option, SelectProps } from "../Inputs.types";
import InputContainer from "../InputContainer";
import styles from "../Inputs.module.css";
import { getSelectClassName } from "./utils";
import Options from "./Options";

function Select({
  label,
  icon,
  value,
  onChange,
  className,
  options,
}: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback((e: MouseEvent) => {
    if (!selectRef.current?.contains(e.target as HTMLElement)) {
      setOpen(false);
    }
  }, []);

  useDocumentEventListener(closeDropdown);

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
          className={getSelectClassName(open)}
        >
          {selectedOptionLabel}
          <img alt="arrow" src={arrow} />
        </span>
        {open ? (
          <Options onChange={handleOptionSelect} options={options} />
        ) : null}
      </div>
    </InputContainer>
  );
}

export default Select;
