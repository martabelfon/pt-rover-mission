import React from "react";

interface InputProps {
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  className?: string;
  placeholder: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  disabled,
  min,
  max,
  className,
  placeholder,
  label,
}) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={min}
      max={max}
      className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa]  focus:outline-none focus:ring-0 focus:border-[#16adfa]  peer ${className}`}
      placeholder=" "
      required
    />
    <label
      htmlFor={placeholder}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#16adfa]  peer-focus:dark:text-[#16adfa]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

export default Input;
