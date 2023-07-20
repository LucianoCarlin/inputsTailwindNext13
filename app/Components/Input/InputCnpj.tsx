import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface CnpjInputProps {
  id: string;
}

export function CnpjInput({ id }: CnpjInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    const maskedValue = newValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
    setValue(maskedValue);
  };

  return (
    <InputRoot
      id={id}
      label="CNPJ"
      value={value}
      onInputChange={handleChange}
    />
  );
}
