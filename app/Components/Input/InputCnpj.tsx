import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

export interface CnpjInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function CnpjInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: CnpjInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    const maskedValue = newValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
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
