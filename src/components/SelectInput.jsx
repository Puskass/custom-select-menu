import React, { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import OptionsList from "./OptionsList";

const SelectInput = ({
  options,
  selectedOption,
  onOptionSelect,
  isOpen,
  openOption,
}) => {
  const inputRef = useRef(null);

  return (
    <div className="relative w-64">
      <input
        onClick={openOption}
        value={selectedOption}
        ref={inputRef}
        type="text"
        placeholder="Select Option"
        readOnly
        className="w-full px-4 py-2 rounded-md bg-custom text-white outline-none cursor-pointer"
      />

      <span
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
          isOpen ? "-rotate-180" : "rotate-0"
        }`}
      >
        <AiOutlineDown className="text-gray-300" />
      </span>

      {isOpen && (
        <OptionsList
          options={options}
          selectedOption={selectedOption}
          inputRef={inputRef}
          onOptionSelect={onOptionSelect}
        />
      )}
    </div>
  );
};

export default SelectInput;
