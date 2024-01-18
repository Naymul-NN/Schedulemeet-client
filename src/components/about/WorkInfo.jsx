import React from "react";

const infoData = [
  {
    id: 1,
    number: 250,
    description: "employees",
  },
  {
    id: 2,
    number: 50,
    description: "number of states/provinces Sensers call home",
  },
  {
    id: 3,
    number: 10,
    description: "number of languages our team speaks",
  },
  {
    id: 4,
    number: "80+",
    description: "customers",
  },
  {
    id: 5,
    number: "500",
    description: "candidates we’ve helped hire in 2022",
  },
  {
    id: 6,
    number: "$5M",
    description: "total funding",
  },
];

const WorkInfo = () => {
  return (
    <div className="workInfoCOntainer py-6 bg-[#111134] ">
      <div className="workInfoWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-12 gap-x-4  w-[80%] m-auto   ">
        {/* work info card  ,   */}
        {infoData &&
          infoData.map((data) => (
            <div
              key={data?.id}
              className="infoCard   flex flex-col justify-start items-center sm:items-start gap-3 sm:gap-2   "
            >
              {/* card top  ,  number */}
              <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold  pb-3 border-b-2  border-gray-200 text-[#33A30F]  ">
                {" "}
                {data?.number}{" "}
              </h1>
              {/* card top  */}

              {/* card bottom , info  */}
              <h1 className=" text-base sm:text-lg md:text-xl text-gray-50 ">
                {data?.description}
              </h1>
              {/* card bottom , info  */}
            </div>
          ))}

        {/* work info card ends */}
      </div>
    </div>
  );
};

export default WorkInfo;
