import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

// const Patients = [
//   { value: "Liam", label: "Liam" },
//   { value: "Noah", label: "Noah" },
//   { value: "Jason", label: "Jason" },
//   { value: "William	", label: "William" },
// ];

function SelectPatients(props) {
  const [Patients, setPatients] = useState([]);
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

  const handleChange = (selectedOption) => {
    props.setPatientSelected(selectedOption);
  };
  return (
    <div className="class">
      <div className="">
        <h3>{"Name"}</h3>
        <Select
          value={props.pateintSelected}
          onChange={handleChange}
          options={Patients}
          placeholder={"Select a ".name}
        />
      </div>
    </div>
  );
}

export default SelectPatients;
