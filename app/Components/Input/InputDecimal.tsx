import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface DecimalInputProps {
  id: string;
  decimalPlaces: number;
}

export function DecimalInput({ id, decimalPlaces }: DecimalInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const formatValue = (value: string) => {
    let formattedValue = value.replace(/[^0-9,.]/g, "");
    formattedValue = formattedValue.replace(/(,,+)/g, ",");
    const parts = formattedValue.split(",");
    const integerPart = parts[0];
    let decimalPart = parts[1] || "";
    decimalPart = decimalPart.slice(0, decimalPlaces);
    formattedValue =
      decimalPart.length > 0 ? `${integerPart},${decimalPart}` : integerPart;
    return formattedValue;
  };

  const handleBlur = () => {
    const formattedValue = formatValue(value);
    setValue(formattedValue);
  };

  return (
    <div>
      <InputRoot
        id={id}
        label="Decimal"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleBlur}>Apply Formatting</button>
    </div>
  );
}
