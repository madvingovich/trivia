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

export interface SelectProps extends InputProps {
  options: Option[];
}
