import React from "react";

const Blog = ({ params }) => {
  const { id } = params;
  return (
    <div className="detailContainer bg-gray-50 text-gray-950 h-screen py-1 ">
      <div className="detailWrapper bg-blue-200 w-[95%] m-auto ">
        {/* detail top section  */}
        <div className="detailTop   flex flex-col md:flex-row gap-9 md:gap-0 justify-evenly items-center mb-6 sm:mb-7 md:mb-10 xmd:mb-12 lg:mb-16 ">
          {/* detail left starts  */}
          <div className="detailLeft  w-[94%] xsm:w-[90%] sm:w-[85%] md:w-[54%]   ">
            {/* category starts  */}
            <h1 className=" mb-3 text-sky-500 font-semibold "> Category </h1>
            {/* category ends */}

            {/* left heading  */}

            <h1 className="  font-bold text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl headingFont mb-5 leading-relaxed  ">
              Connect Calendly with Microsoft Dynamics 365 via Power Automate
            </h1>

            {/* left heading  */}

            {/* read time starts  */}
            <h1 className=" text-xs mb-3 ">READ TIME: 5 MINUTES</h1>
            {/* read time ends  */}

            {/* writer info starts  */}
            <div className="writerInfo  flex items-center gap-2  ">
              {/* writer image  */}
              <div className="writerImg   ">
                <img
                  class=" w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 rounded-full"
                  src={`https://i.ibb.co/K2Dbx8R/Hilary-Yeganegi-Calendly-ezgif-com-webp-to-jpg-converter.jpg`}
                  alt="Rounded avatar "
                />
              </div>
              {/* writer image  */}

              {/* writer name  */}

              <div className="writerName   ">
                <p className=" text-gray-800 font-medium text-xs sm:text-sm ">
                  Hilary Yeganegi
                </p>
                <p className=" text-gray-700 font-medium text-xs  sm:text-sm ">
                  Dec 11, 2023
                </p>
              </div>

              {/* writer name  */}
            </div>
            {/* writer info ends */}

            {/*  */}
          </div>
          {/* detail left ends */}

          {/* detail right  */}
          <div className="detailRight  w-[92%] xsm:w-[85%] sm:w-[72%] md:w-[44%]  ">
            {/* right image  */}
            <div className="rightImg  h-[18rem] sm:h-[19rem]  md:h-[15rem] xmd:h-[16rem] lg:h-[18rem] rounded-md overflow-auto ">
              <img
                src={`https://i.ibb.co/fHSXD9B/Calendly-Dynamics-Hero-1-ezgif-com-webp-to-jpg-converter.jpg`}
                className=" w-full h-full   bg-cover bg-center "
                alt=""
              />
            </div>
            {/* right image  */}
          </div>
          {/* detail right  */}
        </div>
        {/* detail top section  ends */}
      </div>
    </div>
  );
};

export default Blog;
