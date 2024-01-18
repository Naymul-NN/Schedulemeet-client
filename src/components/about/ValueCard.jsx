import React from "react";

const ValueCard = ({ data }) => {
  //   console.log(data);

  if (data?.titleOnly) {
    return (
      <div className="valueCardContainer p-5 bg-gray-100 rounded shadow-lg  border border-gray-100  ">
        <div className="valueCardWrapper h-full   flex justify-center items-center ">
          {/* card title  */}
          <h1 className=" text-6xl font-semibold text-gray-900 ">
            {data?.titleOnly}
          </h1>
          {/* card title ends */}

          {/*  */}
        </div>
      </div>
    );
  }

  return (
    <div className="valueCardContainer p-12 bg-gray-100  rounded shadow-lg border border-gray-100 ">
      <div className="valueCardWrapper  flex flex-col gap-y-5 ">
        {/* card number  */}
        <h1 className=" text-4xl font-bold text-gray-700 "> {data?.id} </h1>
        {/* card number ends */}

        {/* card title  */}
        <h1 className=" text-xl font-medium text-gray-900 ">{data?.title}</h1>
        {/* card title ends */}

        {/* card description  */}
        <p className=" text-xl  text-gray-900 ">{data?.description}</p>
        {/* card description ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default ValueCard;
