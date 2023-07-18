import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface PercentageInputProps {
  id: string;
}

export function PercentageInput({ id }: PercentageInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    // Adicione lógica para formatar o valor com porcentagem
    const formattedValue = `${newValue}%`;
    setValue(formattedValue);
  };

  return (
    <InputRoot
      id={id}
      label="Percentage"
      value={value}
      onChange={handleChange}
    />
  );
}
