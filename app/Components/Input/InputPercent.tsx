import React, { FormEvent, useState } from "react";
import { InputRoot } from "./InputRoot";
import { MdPercent } from "react-icons/md";

interface PercentageInputProps {
  id: string;
}

export function PercentageInput({ id }: PercentageInputProps) {
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
      label="Percentage"
      value={rawValue}
      onInputChange={handleChange}
      onBlurCapture={handleBlur}
      leftIcon={<MdPercent />}
    />
  );
}
