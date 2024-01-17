import React from "react";

const AboutBanner = () => {
  return (
    <div className="aboutBannerContainer">
      <div className="bannerWrapper bg-orange-200 flex justify-between items-center  ">
        {/* banner left starts  */}
        <div className="bannerLeft bg-red-200 w-[58%] ">
          <h1 className=" text-2xl font-semibold text-[#33A30F] mb-7 ">
            About us
          </h1>

          {/*  small description  */}
          <p className=" font-semibold text-5xl leading-tight  text-[#111133] mb-9 ">
            We’re changing how companies hire amazing talent
          </p>

          {/* button section starts  */}
          <div className="buttonSection bg-lime-300 flex gap-7 ">
            {/* join button  */}

            <button className="joinBtn bg-[#111133] py-3 px-5 font-semibold text-gray-50 rounded hover:bg-gray-50 hover:text-[#111133] border border-transparent hover:border-[#111133] transition-all duration-200   ">
              {" "}
              Join the team{" "}
            </button>

            {/* join button  */}

            {/* learn more button  */}

            <button className="joinBtn  bg-gray-50 py-3 px-5 font-semibold  text-[#111133] rounded hover:bg-[#111133] hover:text-gray-50 border  border-[#111133] hover:border-transparent transition-all duration-200   ">
              Learn more
            </button>
            {/* learn more button  */}
          </div>
          {/* button section ends */}
        </div>
        {/* banner left ends */}

        {/*  */}

        {/* bannerRight starts  */}

        <div className="bannerRight bg-sky-200 w-[42%] ">
          <h1>banner right </h1>
          <h1>banner right </h1>
          <h1>banner right </h1>
          <h1>banner right </h1>
        </div>

        {/* bannerRight ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default AboutBanner;
