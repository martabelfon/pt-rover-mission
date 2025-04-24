import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, style }) => (
  <button onClick={onClick} disabled={disabled} style={style}>
    {children}
  </button>
);

export default Button;