import React from "react";

const Identity = () => {
  return (
    <div className="identityContainer py-12 bg-red-50 ">
      <div className="identityWrapper flex  flex-col md:flex-row  gap-y-6 md:gap-y-0 justify-between items-center text-gray-900   ">
        {/* left container starts  */}
        <div className="leftContainer  w-full md:w-[55%] lg:w-[50%] p-3   ">
          {/* heading  */}
          <h1 className="  text-5xl md:text-4xl lg:text-5xl font-semibold mb-7 ">
            Who are we?
          </h1>

          {/* description  */}
          <p className="  text-lg md:text-base lg:text-lg mb-5  ">
            We are a diverse, collaborative team committed to perfecting the way
            companies engage with talent. We’re creating a better experience for
            employers, recruiters, and candidates. Each team member has a
            meaningful opportunity to make a huge impact, and together, our team
            is evolving an entire industry. Join us in shaping the workforce of
            the future!
          </p>

          {/* button  */}

          <button className="  seeOpen py-2.5 px-5 md:py-2 md:px-4 lg:py-2.5 lg:px-5 border border-gray-900 rounded text-gray-800 font-bold hover:border-transparent hover:bg-gray-900  hover:text-gray-50  transition-all duration-200  ">
            See open posttion
          </button>
        </div>
        {/* left container endss  */}

        {/* right container starts  */}
        <div className="rightCOntainer  bg-blue-400 w-[45%] lg:w-[50%]  ">
          <h1>right container</h1>
          <h1>right container</h1>
          <h1>right container</h1>
        </div>
        {/* right container ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default Identity;
