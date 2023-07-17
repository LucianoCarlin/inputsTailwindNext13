import React, { useState } from "react";

interface TextFieldProps {
  id: string;
  label: string;
}

export function InputWithOverlappingLabel({ id, label }: TextFieldProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isOutlined = true;

  return (
    <div className={`relative ${isOutlined ? "rounded-md" : ""}`}>
      <label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-200 ${
          isFocused || value
            ? "-top-2 text-xs font-semibold text-gray-500"
            : "top-2 text-base"
        } ${isOutlined ? "bg-white px-1" : ""}`}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full p-2 pl-3 focus:outline-none ${
          isOutlined ? "border rounded-md box-content" : "border"
        } ${
          isFocused
            ? "border-gray-500 border-2 shadow-md"
            : "border-gray-300 hover:border-gray-400"
        }`}
      />
    </div>
  );
}
