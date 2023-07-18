import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface CpfInputProps {
  id: string;
}

export function CpfInput({ id }: CpfInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    // Adicione lógica de máscara de CPF para formatar o valor
    const maskedValue = newValue.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
    setValue(maskedValue);
  };

  return (
    <InputRoot id={id} label="CPF" value={value} onChange={handleChange} />
  );
}
