import React, { useState } from "react";
import { InputRoot } from "./InputRoot";

interface EmailInputProps {
  id: string;
}

export function EmailInput({ id }: EmailInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <InputRoot
      id={id}
      label="Email"
      value={value}
      onInputChange={handleChange}
      type="email"
    />
  );
}
