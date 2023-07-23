import React, { FormEvent, useState } from "react";
import { InputRoot } from "./InputRoot";
import { MdPercent } from "react-icons/md";

export interface PercentageInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function PercentageInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: PercentageInputProps) {
  const [rawValue, setRawValue] = useState("");

  const handleChange = (newValue: string) => {
    setRawValue(newValue);
  };

  const formatValue = (value: string) => {
    let numericValue = value.replace(",", ".");
    const numeric = parseFloat(numericValue);
    if (!isNaN(numeric)) {
      return numeric.toFixed(2).replace(".", ",");
    } else {
      return "";
    }
  };

  const handleBlur = () => {
    const formattedValue = formatValue(rawValue);
    setRawValue(formattedValue);
  };

  return (
    <InputRoot
      id={id}
      label={label}
      value={rawValue}
      onInputChange={handleChange}
      onBlurCapture={handleBlur}
      leftIcon={<MdPercent />}
      disabled={isDisabled}
    />
  );
}
