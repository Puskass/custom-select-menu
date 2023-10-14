import React, { useState } from "react";
import SelectInput from "./components/SelectInput";

const App = () => {
  const optionsArray = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    setIsOpen(false)
  };

  const openOption = ( ) => {
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <SelectInput
        options={optionsArray}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        isOpen={isOpen}
        openOption={openOption}
      />
    </div>
  );
};

export default App;
