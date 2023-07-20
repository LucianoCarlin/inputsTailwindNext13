import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface CepInputProps {
  id: string;
}

export function CepInput({ id }: CepInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    const maskedValue = newValue.replace(/^(\d{5})(\d{3})?$/, "$1-$2");
    setValue(maskedValue);
  };

  return (
    <InputRoot id={id} label="CEP" value={value} onInputChange={handleChange} />
  );
}