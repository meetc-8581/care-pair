import axios from "axios";
import React, { useEffect, useState } from "react";
import RecommendationsNames from "./RecommendationNames";

function Recommendations({
  nurses,
  nurseSelected,
  setNurseSelected,
  patientSelected,
}) {
  const [predictions, setpredictions] = useState([]);

  //   console.log(nurseSelected);

  useEffect(() => {
    axios
      .get("http://localhost:8000/predict", {
        params: { id: patientSelected.value },
      })
      .then((response) => setpredictions(response.data))
      .catch((error) => console.log(error));

    console.log(predictions);
  }, [patientSelected]);
  //   const handleClick = (selectedOption) => {
  //     setNurseSelected(selectedOption);
  //   };

  return (
    <div className="class">
      <ul class="my-4 space-y-3">
        {predictions.map((nurse) => (
          // <li type="none" key={nurse.value}>
          //   {nurse.value}
          // </li>
          <li key={nurse[0]}>
            <a
              href="#"
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow"
              //   onClick={handleClick(nurse)}
            >
              {/* <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  {nurse.value}
                </span>
              </div> */}

              <img
                className="h-14"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=White&eyeType=Happy&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Light"
              />

              <span class="flex-1 ml-3 whitespace-nowrap">
                <RecommendationsNames id={nurse[0]} />
                {/* {nurse[0]} */}
              </span>
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-grey-500 bg-green-200 rounded ">
                {(nurse[1] * 100).toFixed(2)}
                {" %"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
