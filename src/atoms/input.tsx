import React from "react";

interface InputProps {
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, disabled, min, max, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    disabled={disabled}
    min={min}
    max={max}
    className={className}
  />
);

export default Input;