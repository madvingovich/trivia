import { ReactNode } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface InputProps {
  type?: string;
  label: string;
  icon: string;
  value: Option["value"];
  onChange: (value: Option["value"]) => void;
  className?: string | undefined;
}

export interface InputContainerProps {
  className?: string;
  label: string;
  icon: string;
  children: ReactNode;
}

export interface SelectProps extends InputProps {
  options: Option[];
}
