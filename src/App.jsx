//import "./App.css";
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  const optionsArray = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [openSelect, setOpenSelect] = useState(false);

  const leagueInput = useRef(null);

  function selectValue(e) {
    e.stopPropagation();
    leagueInput.current.value = e.target.outerText;
    setOpenSelect(false);
  }

  function openOption() {
    setOpenSelect(true);
  }

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="relative w-64">
        <input
          onClick={openOption}
          onBlur={() => {
            setOpenSelect(false);
          }}
          ref={leagueInput}
          id="league"
          type="text"
          placeholder="Select Option"
          readOnly
          className="w-full px-4 py-2 rounded-md bg-custom text-white outline-none cursor-pointer"
        />

        <span
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
            openSelect ? "rotate-0" : "rotate-[-90deg]"
          }`}
        >
          <IoIosArrowDown className="text-gray-300" />
        </span>

        <div
          className={`absolute w-full max-h-36 bg-custom rounded-md overflow-auto transform transition-transform duration-300 ${
            openSelect
              ? "translate-y-2 opacity-100"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {optionsArray.map((item, index) => (
            <div
              onClick={selectValue}
              key={index}
              className={`cursor-pointer py-2 px-4 text-gray-300 hover:bg-gray-800 ${
                item === leagueInput.current?.value ? "bg-gray-800" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
