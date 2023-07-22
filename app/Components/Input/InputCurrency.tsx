import React, { FormEvent, useState } from "react";
import { InputRoot } from "./InputRoot";

interface CurrencyInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

function currency(
  e: FormEvent<HTMLInputElement>,
  setValue: (value: string) => void
) {
  if (e.currentTarget.value) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    const intValue = parseInt(value, 10);

    value = (intValue / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    e.currentTarget.value = value;
    setValue(value);
    return value;
  } else {
    return null;
  }
}

export function CurrencyInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: CurrencyInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <InputRoot
      id={id}
      label={label}
      value={value}
      onInputChange={handleChange}
      onKeyUp={(e: FormEvent<HTMLInputElement>) => currency(e, setValue)}
      disabled={isDisabled}
    />
  );
}
