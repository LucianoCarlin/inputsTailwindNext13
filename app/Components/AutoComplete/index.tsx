import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface AutocompleteProps {
  id: string;
  label: string;
  options: Option[];
}

export function Autocomplete({ id, label, options }: AutocompleteProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setOpen(true); // Exibe a lista ao digitar no input
    setSelectedOption(null); // Limpa a opção selecionada
  };

  const handleOpen = () => {
    setIsFocused(true);
    setOpen(true);
  };

  const handleClose = () => {
    setIsFocused(false);
    setOpen(false);
  };

  const handleSelectOption = (option: Option) => {
    setValue(option.label);
    setSelectedOption(option);
    setIsFocused(false);
    setOpen(false);
  };

  const handleInputBlur = () => {
    handleClose();
  };

  const handleInputClick = () => {
    setOpen(true);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleOpen}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
          className={`w-full p-2 pl-3 focus:outline-none ${
            isFocused
              ? 'border-gray-500 border-2 shadow-md'
              : 'border-gray-300 hover:border-gray-400'
          } border border-gray-300 rounded-md`}
          autoComplete="off"
        />
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 ${
            isFocused || value
              ? '-top-2 text-xs font-semibold text-gray-500'
              : 'top-1/2 transform -translate-y-1/2 text-gray-400'
          } pointer-events-none bg-white px-1`}
        >
          {label}
        </label>
      </div>
      {open && (
        <ul className="absolute z-10 w-full py-2 mt-1 overflow-auto bg-white shadow-lg max-h-60 rounded-md">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onMouseDown={() => handleSelectOption(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                option === selectedOption ? 'bg-blue-100' : ''
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
