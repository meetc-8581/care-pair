import React, { useState } from "react";
import Select from "react-select";
import "tailwindcss/tailwind.css";

function SelectDropdown({ options, name }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="">
      <h3>{name}</h3>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={"Physical"}
      />
    </div>
  );
}

export default SelectDropdown;
