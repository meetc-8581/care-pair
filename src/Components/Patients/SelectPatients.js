import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectDropdown from "../Inputs/SelectDropdown";

// const Patients = [
//   { value: "Liam", label: "Liam" },
//   { value: "Noah", label: "Noah" },
//   { value: "Jason", label: "Jason" },
//   { value: "William	", label: "William" },
// ];

function SelectPatients() {
  const [Patients, setPatients] = useState([
    { value: "Liam", label: "Liam" },
    { value: "Noah", label: "Noah" },
    { value: "Jason", label: "Jason" },
    { value: "William	", label: "William" },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/patient/names")
      .then((response) => {
        var data = response.data.map((data) => ({
          label: data.fname,
          value: data.Id,
        }));
        setPatients(data);
      })
      //   .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="class">
      <SelectDropdown options={Patients} name={"Name"} />
    </div>
  );
}

export default SelectPatients;
