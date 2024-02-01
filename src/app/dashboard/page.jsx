import Image from "next/image";
import React from "react";

const Dashboaed = () => {
  return (
    <div className="min-h-screen py-0 xsm:py-3 sm:py-5  text-black flex flex-col justify-center items-center gap-y-6  ">
      <h1 className="  text-lg xsm:text-2xl sm:text-3xl md:text-2xl xmd:text-3xl lg:text-4xl font-bold text-yellow-400">
        Wellcome to your dashboard.............
      </h1>
      <Image
        // className="  w-[500px] lg:w-[600px]"
        className=" w-[22rem] xsm:w-[32rem] sm:w-[36rem] md:w-[32rem] xmd:w-[35rem] lg:w-[38rem] "
        height="500"
        width="500"
        src="https://i.ibb.co/NxCq1vw/3819-jpg-wh860.jpg"
        alt=""
      />
    </div>
  );
};

export default Dashboaed;
