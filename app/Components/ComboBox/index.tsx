import React, { useState, useRef } from 'react';

interface AutocompleteProps {
  id: string;
  label: string;
}

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
];

export function AutocompleteCombo({ id, label }: AutocompleteProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    setIsFocused(true);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsFocused(false);
    setIsOpen(false);
  };

  const handleSelectOption = (option: { value: string; label: string }) => {
    setValue(option.label);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={`relative ${isFocused || value ? 'mt-2' : ''}`}>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleOpen}
          onBlur={handleClose}
          ref={inputRef}
          className={`w-full p-2 pl-3 focus:outline-none ${
            isFocused
              ? 'border-gray-500 border-2 shadow-md'
              : 'border-gray-300 hover:border-gray-400'
          } border border-gray-300 rounded-md`}
          autoComplete="off"
          aria-label={label}
        />
        <label
          htmlFor={id}
          className={`absolute left-2 transition-all duration-200 ${
            isFocused || value
              ? '-top-2 text-xs font-semibold text-gray-500'
              : 'top-2 text-base'
          } bg-white px-1 pointer-events-none`}
        >
          {label}
        </label>
      </div>
      {isOpen && (
        <ul
          className="absolute z-10 w-full py-2 mt-1 overflow-auto bg-white shadow-lg max-h-60 rounded-md"
          onBlur={handleClose}
        >
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelectOption(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
