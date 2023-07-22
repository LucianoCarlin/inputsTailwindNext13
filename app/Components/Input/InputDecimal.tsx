import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface DecimalInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
  decimalPlaces: number;
}

export function DecimalInput({
  id,
  label,
  decimalPlaces,
  initialValue = "",
  isDisabled = false,
}: DecimalInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const formatValue = (value: string) => {
    let formattedValue = value.replace(/[^0-9,.]/g, "");
    formattedValue = formattedValue.replace(/(,,+)/g, ",");
    const parts = formattedValue.split(",");
    const integerPart = parts[0];
    let decimalPart = parts[1] || "";
    if (decimalPart.length > decimalPlaces) {
      decimalPart = decimalPart.slice(0, decimalPlaces);
    } else {
      while (decimalPart.length < decimalPlaces) {
        decimalPart += "0";
      }
    }
    formattedValue =
      decimalPart.length > 0 ? `${integerPart},${decimalPart}` : integerPart;
    return formattedValue;
  };

  const handleBlur = (e: any) => {
    if (e.target.value) {
      const formattedValue = formatValue(value);
      setValue(formattedValue);
    }
  };

  return (
    <div>
      <InputRoot
        id={id}
        label={label}
        value={value}
        onInputChange={handleChange}
        onBlurCapture={handleBlur}
        disabled={isDisabled}
      />
    </div>
  );
}
