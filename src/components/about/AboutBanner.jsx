import React from "react";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="aboutBannerContainer  py-10 ">
      <div className="bannerWrapper  flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center w-[96%] sm:w-[94%]  md:w-[92%] lg:w-[90%] m-auto ">
        {/* banner left starts  */}
        <div className="bannerLeft  w-[100%] md:w-[55%] lg:w-[58%] p-1 ">
          <h1 className=" text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold text-[#33A30F] mb-2.5 sm:mb-4 lg:mb-6 ">
            About us
          </h1>

          {/*  small description  */}
          <p className=" font-semibold text-2xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight  text-white mb-6 md:mb-7 lg:mb-9 ">
            We’re changing how companies hire amazing talent
          </p>

          {/* button section starts  */}
          <div className="buttonSection  flex gap-7 ">
            {/* join button  */}

            <button className="joinBtn btn btn-warning  py-1.5 px-3 sm:py-3 sm:px-5 font-semibold text-black rounded hover:bg-gray-50 hover:text-[#111133] border border-transparent hover:border-[#111133] transition-all duration-200   ">
              {" "}
              Join the team{" "}
            </button>

            {/* join button  */}

            {/* learn more button  */}

            <button className="joinBtn  bg-gray-50 py-1.5 px-3 sm:py-3 sm:px-5 font-semibold  text-[#111133] rounded hover:bg-yellow-400 hover:text-black border  border-[#111133] hover:border-transparent transition-all duration-200   ">
              Learn more
            </button>
            {/* learn more button  */}
          </div>
          {/* button section ends */}
        </div>
        {/* banner left ends */}

        {/*  */}

        {/* bannerRight starts  */}

        <div className="bannerRight   w-[90%] md:w-[45%] lg:w-[42%] ">
          {/* banner image section starts  */}
          <div className="bannerImg  w-[75%] sm:w-[85%] md:w-full  m-auto    ">
            <Image
              src="https://i.ibb.co/wBrFvkt/banner-Img.png"
              className=""
              alt="about banner"
              height={500}
              width={550}
            />
          </div>
          {/* banner image section ends */}
        </div>

        {/* bannerRight ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default AboutBanner;
