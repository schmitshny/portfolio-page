import React from "react";
import "./button.scss";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <div className="button">{text}</div>;
};

export default Button;
