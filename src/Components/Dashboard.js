import React from "react";
import Avatar from "./Navbar/Avatar";
import Navbar from "./Navbar/Navbar";
import SelectDropdown from "./Inputs/SelectDropdown";
import Datepicker from "./Inputs/DatePicker";
import Recommendations from "./Recommendations/Recommendations";
import SelectPatients from "./Patients/SelectPatients";

function Dashboard() {
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
    { id: "2", name: "Jessica", score: 99 },
    { id: "3", name: "Elizabeth", score: 99 },
    { id: "4", name: "Madison", score: 99 },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl">Patient</div>
          <div className="grid grid-cols-3 gap-4 h-96 my-10">
            <div>
              {/* <SelectDropdown options={Patients} name={"Name"} /> */}
              <SelectPatients></SelectPatients>
            </div>
            <div>
              <SelectDropdown options={therapies} name={"Therapy"} />
            </div>

            <div>
              <Datepicker name={"Date"} />
            </div>
            {/* <SelectDropdown options={therapies} name={"Therapy"} /> */}
          </div>
          <div></div>
        </div>
        <div>
          <div className="text-2xl">Patient Details</div>
          <div className="bg-slate-100 h-5/6 my-5 border-solid border-2 border-slate-400 rounded-lg">
            <div className="m-5">Details</div>
          </div>
        </div>
        <div>
          <div className="text-2xl">Recomended Nurses</div>
          <div>
            <Recommendations nurses={nurses} />
          </div>
        </div>
        <div>
          <div className="text-2xl">Nurse Details</div>
          <div className="bg-slate-100 h-5/6 my-5 border-solid border-2 border-slate-400 rounded-lg">
            <div className="m-5">Details</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
