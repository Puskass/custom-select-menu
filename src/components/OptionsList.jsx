import React from "react";
import { motion } from "framer-motion";
import OptionItem from "./OptionItem";

const OptionsList = ({ options, selectedOption, inputRef, onOptionSelect }) => {
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.ul
      variants={wrapperVariants}
      initial="closed"
      animate="open"
      className="mt-1 absolute w-full max-h-36 bg-custom rounded-md overflow-auto transform transition-transform duration-300"
    >
      {options.map((item, index) => (
        <OptionItem
          key={index}
          option={item}
          selectedOption={selectedOption}
          inputRef={inputRef}
          onOptionSelect={onOptionSelect}
        />
      ))}
    </motion.ul>
  );
};

export default OptionsList;
