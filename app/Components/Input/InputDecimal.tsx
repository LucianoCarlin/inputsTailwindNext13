import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface DecimalInputProps {
  id: string;
  decimalPlaces: number;
}

export function DecimalInput({ id, decimalPlaces }: DecimalInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    // Adicione lógica para formatar o valor com as casas decimais especificadas
    const regex = new RegExp(`^(\\d+(\\.\\d{0,${decimalPlaces}})?).*$`);
    const matchedValue = newValue.match(regex);
    const formattedValue = matchedValue ? matchedValue[1] : "";
    setValue(formattedValue);
  };

  return (
    <InputRoot id={id} label="Decimal" value={value} onChange={handleChange} />
  );
}
