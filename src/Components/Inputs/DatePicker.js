import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DatePicker({ name }) {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <div>{name}</div>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        asSingle={true}
        useRange={false}
        primaryColor={"blue"}
      />
    </div>
  );
}
export default DatePicker;
