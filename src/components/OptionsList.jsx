import React from "react";
import OptionItem from "./OptionItem";

const OptionsList = ({ options, selectedOption, inputRef, onOptionSelect }) => {
  return (
    <div className="mt-1 absolute w-full max-h-36 bg-custom rounded-md overflow-auto transform transition-transform duration-300">
      {options.map((item, index) => (
        <OptionItem
          key={index}
          option={item}
          selectedOption={selectedOption}
          inputRef={inputRef}
          onOptionSelect={onOptionSelect}
        />
      ))}
    </div>
  );
};

export default OptionsList;
