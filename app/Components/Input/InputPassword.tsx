import React, { useState } from "react";
import { InputRoot } from "./InputRoot";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

interface PasswordInputProps {
  id: string;
}

export function PasswordInput({ id }: PasswordInputProps) {
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
      label="Password"
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
    />
  );
}
