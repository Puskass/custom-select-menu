import React from "react";
import { motion } from "framer-motion";

const OptionItem = ({ option, selectedOption, inputRef, onOptionSelect }) => {
  const handleOptionClick = () => {
    onOptionSelect(option);
    inputRef.current.value = option;
    inputRef.current.blur();
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -15 },
  };

  return (
    <motion.div
      variants={itemVariants}
      onClick={handleOptionClick}
      className={`cursor-pointer py-2 px-4 text-gray-300 hover:bg-gray-800 ${
        option === selectedOption ? "bg-gray-800" : ""
      }`}
    >
      {option}
    </motion.div>
  );
};

export default OptionItem;
