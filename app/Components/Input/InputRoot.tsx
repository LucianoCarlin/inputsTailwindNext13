import React, { useState } from "react";

interface InputRootProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string | number; // Altere para aceitar number também, se necessário
  onInputChange: (value: string) => void; // Renomeie a propriedade para evitar conflito
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  disabled: boolean;
}

export function InputRoot({
  id,
  label,
  value,
  onInputChange,
  type = "text",
  leftIcon,
  rightIcon,
  onRightIconClick,
  disabled,
  ...rest
}: InputRootProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
    setHasValue(newValue !== "");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value !== "");
  };

  const isOutlined = true;

  const handleRightIconClick = () => {
    if (onRightIconClick) {
      onRightIconClick();
    }
  };

  return (
    <div className={`relative ${isOutlined ? "rounded-md" : ""}`}>
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || hasValue
            ? "-top-2 text-xs font-semibold text-gray-500"
            : "top-2 text-base"
        } ${isOutlined ? "bg-white px-1" : ""} ${
          leftIcon ? "pl-1 left-4 ml-2" : ""
        } ${isFocused && leftIcon ? "mt-0 pl-1" : ""}
        ${disabled ? "bg-gray-200" : ""}
        `}
      >
        {label}
      </label>
      <div
        className={`flex items-center ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {leftIcon && (
          <div className="absolute left-2  flex items-center h-full pointer-events-none">
            {React.cloneElement(leftIcon as React.ReactElement, {
              className: "text-gray-500",
            })}
          </div>
        )}
        <input
          {...rest}
          type={type}
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full p-2 ${
            leftIcon ? "pl-6" : "pl-3"
          } focus:outline-none ${
            isOutlined ? "border rounded-md box-content" : "border"
          } ${
            isFocused
              ? "border-gray-500 border-1 shadow-md"
              : "border-gray-300 hover:border-gray-400"
          }${
            disabled
              ? "cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500"
              : ""
          }`}
        />
        {rightIcon && (
          <div
            className="absolute right-2 flex items-center h-full pointer-events-auto cursor-pointer"
            onClick={handleRightIconClick}
          >
            {React.cloneElement(rightIcon as React.ReactElement, {
              className: "text-gray-500",
            })}
          </div>
        )}
      </div>
    </div>
  );
}
