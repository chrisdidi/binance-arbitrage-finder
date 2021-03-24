import React from "react";

interface IProps {
  label: string;
  disabled?: boolean;
  onClick?: any;
  intent: "default" | "attention" | "cancel" | "danger";
  fullWidth?: boolean;
}

const Button: React.FC<IProps> = ({
  label,
  disabled = false,
  onClick,
  intent = "default",
  fullWidth = false,
}) => {
  if (disabled) {
    intent = "cancel";
  }
  return (
    <button
      className={`${intent === "default" && "bg-gray-700"} ${
        intent === "danger" && "bg-red-400"
      } ${intent === "attention" && "bg-indigo-500"} ${
        intent === "cancel" && "bg-gray-400"
      } rounded-lg shadow-md text-lg py-1 px-3 text-white hover:opacity-60 transition-opacity duration-500 focus:outline-none${
        fullWidth && "w-full"
      }`}
      onClick={disabled ? () => {} : onClick}
    >
      {label}
    </button>
  );
};

export default Button;
