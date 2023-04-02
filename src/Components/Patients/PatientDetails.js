import axios from "axios";
import React, { useEffect, useState } from "react";

function PatientDetails({ patientSelected }) {
  const [patientInfo, setPatientInfo] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/patient/id", {
        params: { id: patientSelected.value },
      })
      .then((response) => setPatientInfo(response.data))
      .then((response) => console.log(response))

      .catch((error) => console.log(error));
  }, [patientSelected]);
  return (
    <>
      <div class="flex flex-col items-center pb-10">
        <img
          class="h-48"
          alt="avatar"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Pale"
        />
        <h5 class="mb-1 text-xl font-medium ">
          {patientInfo.fname + " "}
          {patientInfo.lname}
        </h5>
        <div class="grid grid-cols-2 gap-x-28 gap-y-10">
          <div className="">
            <div className="text-xl font-semibold">Name </div>
            <div>
              {patientInfo.fname + " "}
              {patientInfo.lname}
            </div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">Age </div>
            <div>{patientInfo.age}</div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">City </div>
            <div>{patientInfo.city}</div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">Diagnosis </div>
            <div>{patientInfo.diagnosis}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDetails;
