import axios from "axios";
import React, { useEffect, useState } from "react";

function NurseDetails({ nurseSelected }) {
  const [nurseInfo, setNurseInfo] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/nurse/id", {
        params: { id: nurseSelected.value },
      })
      .then((response) => setNurseInfo(response.data))
      .then((response) => console.log(response))

      .catch((error) => console.log(error));
  }, [nurseSelected]);
  return (
    <>
      <div class="flex flex-col items-center pb-10">
        <img
          class="h-48"
          src="https://avataaars.io/?avatarStyle=Circle&amp;topType=LongHairCurly&amp;accessoriesType=Prescription01&amp;hairColor=Black&amp;facialHairType=Blank&amp;clotheType=ShirtVNeck&amp;clotheColor=White&amp;eyeType=Happy&amp;eyebrowType=SadConcerned&amp;mouthType=Smile&amp;skinColor=Light"
        />
        <h5 class="mb-1 text-xl font-medium ">
          {nurseInfo.fname + " "}
          {nurseInfo.lname}
        </h5>
        <div class="grid grid-cols-2 gap-x-28 gap-y-10">
          <div className="">
            <div className="text-xl font-semibold">Name </div>
            <div>
              {nurseInfo.fname + " "}
              {nurseInfo.lname}
            </div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">Age </div>
            <div>{nurseInfo.age}</div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">City </div>
            <div>{nurseInfo.city}</div>
          </div>
          <div className="">
            <div className="text-xl font-semibold">Speciality </div>
            <div>{nurseInfo.speciality}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NurseDetails;
