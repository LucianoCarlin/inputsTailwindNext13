import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface CurrencyInputProps {
  id: string;
}

export function CurrencyInput({ id }: CurrencyInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    // Adicione lógica para formatar o valor com cifrão
    const formattedValue = `$${newValue}`;
    setValue(formattedValue);
  };

  return (
    <InputRoot id={id} label="Currency" value={value} onChange={handleChange} />
  );
}
