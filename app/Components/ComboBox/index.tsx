import React, { useState, useRef } from "react";

interface ComboBoxProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

export function ComboBox({ id, label, options }: ComboBoxProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleSelectOption = (option: { value: string; label: string }) => {
    setSelectedOption(option.value);
    setFilterValue("");
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div className={`relative ${isFocused || selectedOption ? "mt-2" : ""}`}>
      <label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-200 ${
          isFocused || selectedOption
            ? "-top-2 text-xs font-semibold text-gray-500"
            : "top-2 text-base"
        } bg-white px-1`}
        style={{ zIndex: isOpen ? 10 : undefined }}
      >
        {label}
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id={`${id}-input`}
          ref={inputRef}
          value={filterValue}
          onChange={handleInputChange}
          onClick={handleToggleOpen}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={`w-full p-2 pl-3 appearance-none focus:outline-none ${
            isFocused
              ? "border-gray-500 border-2 shadow-md"
              : "border-gray-300 hover:border-gray-400"
          } border border-gray-300 rounded-md`}
          placeholder={label}
          autoComplete="off"
        />
        {isOpen && (
          <ul
            id={`${id}-listbox`}
            tabIndex={-1}
            role="listbox"
            aria-labelledby={`${id}-label`}
            aria-activedescendant={`${id}-${selectedOption}`}
            className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white shadow-lg max-h-60 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                id={`${id}-${option.value}`}
                role="option"
                onClick={() => handleSelectOption(option)}
                className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 ${
                  option.value === selectedOption ? "bg-blue-100" : ""
                }`}
              >
                <span className="font-normal block truncate">
                  {option.label}
                </span>
                {option.value === selectedOption && (
                  <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 01-2 0V6.414L5.707 8.707A1 1 0 014.293 7.293l4-4A1 1 0 0110 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
