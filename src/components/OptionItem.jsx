const OptionItem = ({ option, selectedOption, inputRef, onOptionSelect }) => {
  const handleOptionClick = () => {
    onOptionSelect(option);
    inputRef.current.value = option;
    inputRef.current.blur();
  };

  return (
    <div
      onClick={handleOptionClick}
      className={`cursor-pointer py-2 px-4 text-gray-300 hover:bg-gray-800 ${
        option === selectedOption ? "bg-gray-800" : ""
      }`}
    >
      {option}
    </div>
  );
};

export default OptionItem;
