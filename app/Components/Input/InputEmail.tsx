import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

export interface EmailInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function EmailInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: EmailInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <InputRoot
      id={id}
      label={label}
      value={value}
      onInputChange={handleChange}
      type="email"
      disabled={isDisabled}
    />
  );
}
