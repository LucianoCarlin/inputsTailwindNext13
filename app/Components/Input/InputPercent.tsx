import React, { FormEvent, useState } from "react";
import { InputRoot } from "./InputRoot";
import { MdPercent } from "react-icons/md";

interface PercentageInputProps {
  id: string;
}

export function PercentageInput({ id }: PercentageInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleBlur = (e: FormEvent<HTMLInputElement>) => {
    let numericValue = e.currentTarget.value.replace(/[^\d.]/g, "");
    if (numericValue) {
      const roundedValue = parseFloat(numericValue).toFixed(2);
      const formattedValue = `${roundedValue.replace(".", ",")}`;
      setValue(formattedValue);
    }
  };

  return (
    <InputRoot
      id={id}
      label="Percentage"
      value={value}
      onInputChange={handleChange}
      onBlurCapture={handleBlur}
      leftIcon={<MdPercent />}
    />
  );
}
