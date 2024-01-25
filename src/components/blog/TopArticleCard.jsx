import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TopArticleCard = () => {
  return (
    <div className="topArticleContainer   ">
      <div className="topArticleWrapper bg-fuchsia-800 rounded-md py-4 sm:py-6 px-2 sm:px-3 group text-gray-50 cursor-pointer ">
        {/* title starts  */}

        <h1 className="  text-lg md:text-xl font-bold py-1.5 sm:py-2 ">
          How to send a calendar invite with Calendly
        </h1>
        {/* title ends  */}

        {/* read time starts  */}
        <h1 className=" py-1.5 sm:py-2 text-xs sm:text-sm md:text-base ">
          Read time : 4 minutes{" "}
        </h1>
        {/* read time ends */}

        {/* read more button starts  */}
        <div className="readMore  pt-3 sm:pt-4 flex  items-center self-center gap-x-1 sm:gap-x-2    ">
          <h1 className=" text-sm sm:text-base ">Read more </h1>

          <FaArrowRightLong className=" text-base sm:text-lg group-hover:translate-x-1 transition-all duration-200  " />
        </div>
        {/* read more button ends  */}
      </div>
    </div>
  );
};

export default TopArticleCard;
