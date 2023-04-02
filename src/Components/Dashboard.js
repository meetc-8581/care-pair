import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";
import SelectDropdown from "./Inputs/SelectDropdown";
import Datepicker from "./Inputs/DatePicker";
import Recommendations from "./Recommendations/Recommendations";
import SelectPatients from "./Patients/SelectPatients";
import PatientDetails from "./Patients/PatientDetails";
import NurseDetails from "./Nurses/NurseDetails";

function Dashboard() {
  const [patientSelected, setPatientSelected] = useState({
    value: 1,
    label: "Select",
  });
  const [nurseSelected, setNurseSelected] = useState({
    value: 1,
    label: "Select",
  });
  const therapies = [
    { value: "Physical", label: "Physical" },
    { value: "Occupational", label: "Occupational " },
    { value: "Speech", label: "Speech" },
    { value: "Home-health Aid	", label: "Home-health Aid" },
  ];

  //   const nurses = [
  //     { value: "Sarah", label: "Sarah" },
  //     { value: "Jessica", label: "Jessica" },
  //     { value: "Elizabeth", label: "Elizabeth" },
  //     { value: "Madison", label: "Madison" },
  //   ];

  const nurses = [
    { id: "1", name: "Sarah", score: 99 },
    { id: "2", name: "Jessica", score: 87 },
    { id: "3", name: "Elizabeth", score: 86 },
    { id: "4", name: "Madison", score: 79 },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl font-bold">Patient</div>
          <div className="grid grid-cols-2 gap-4 my-10">
            <div>
              {/* <SelectDropdown options={Patients} name={"Name"} /> */}
              <SelectPatients
                patientSelected={patientSelected}
                setPatientSelected={setPatientSelected}
              ></SelectPatients>
            </div>
            <div>
              <SelectDropdown options={therapies} name={"Therapy"} />
            </div>

            <div>
              <Datepicker name={"Date"} />
            </div>
            {/* <SelectDropdown options={therapies} name={"Therapy"} /> */}
            <div>
              <div className="">Submit</div>
              <button
                type="submit"
                class="py-2.5 flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                </span>
                Generate
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div className="text-2xl font-bold">Patient Details</div>
          <div className="bg-slate-100 h-5/6 my-5 border-solid border-2 border-slate-400 rounded-lg">
            <div className="m-5">
              <PatientDetails patientSelected={patientSelected} />
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">Recomended Nurses</div>
          <div>
            <Recommendations
              nurses={nurses}
              nurseSelected={nurseSelected}
              setNurseSelected={setNurseSelected}
              patientSelected={patientSelected}
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">Nurse Details</div>
          <div className="bg-slate-100 h-5/6 my-5 border-solid border-2 border-slate-400 rounded-lg">
            <div className="m-5">
              <NurseDetails nurseSelected={nurseSelected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
