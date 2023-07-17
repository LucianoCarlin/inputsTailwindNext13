import React, { useState } from "react";

const options = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
  { value: "Option 4", label: "Option 4" },
];

export function Autocomplete() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectOption = (option: { value?: string; label: any }) => {
    setValue(option.label);
    setOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleOpen}
        onBlur={handleClose}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Search"
      />
      {open && (
        <ul className="absolute z-10 w-full py-2 mt-1 overflow-auto bg-white shadow-lg max-h-60 rounded-md">
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
