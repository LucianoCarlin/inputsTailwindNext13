import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

export interface TextInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function TextInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: TextInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    const maskedValue = newValue.replace(/^(\d{5})(\d{3})?$/, "$1-$2");
    setValue(maskedValue);
  };

  return (
    <InputRoot
      id={id}
      label={label}
      value={value}
      onInputChange={handleChange}
      disabled={isDisabled}
    />
  );
}
