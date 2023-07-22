import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

export interface CepInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function CepInput({
  id,
  label,
  initialValue = "CEP",
  isDisabled = false,
}: CepInputProps) {
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
