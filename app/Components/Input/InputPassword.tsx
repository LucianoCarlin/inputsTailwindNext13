import React, { useState } from "react";
import { InputRoot } from "./InputRoot";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

interface PasswordInputProps {
  id: string;
  label: string;
  initialValue?: string; // Allow passing `initialValue` prop storybook
  isDisabled?: boolean; // Allow passing `isDisabled` prop storybook
}

export function PasswordInput({
  id,
  label,
  initialValue = "",
  isDisabled = false,
}: PasswordInputProps) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <InputRoot
      id={id}
      label={label}
      value={value}
      onInputChange={handleChange}
      type={showPassword ? "text" : "password"}
      leftIcon={<MdLock />}
      rightIcon={
        showPassword ? (
          <MdVisibility onClick={handleTogglePasswordVisibility} />
        ) : (
          <MdVisibilityOff onClick={handleTogglePasswordVisibility} />
        )
      }
      disabled={isDisabled}
    />
  );
}
