import React from "react";

function Recommendations({ nurses }) {
  return (
    <div className="class">
      <ul class="my-4 space-y-3">
        {nurses.map((nurse) => (
          // <li type="none" key={nurse.value}>
          //   {nurse.value}
          // </li>
          <li>
            <a
              href="#"
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow"
            >
              {/* <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  {nurse.value[0]}
                </span>
              </div> */}

              <img
                className="h-14"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=White&eyeType=Happy&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Light"
              />

              <span class="flex-1 ml-3 whitespace-nowrap">{nurse.value}</span>
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-grey-500 bg-yellow-200 rounded ">
                99%
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
