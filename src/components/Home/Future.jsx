
import React from "react";

const Future= () => {
  return (
    <div className="identityContainer py-12 ">
      <div className="identityWrapper flex  flex-col md:flex-row  gap-y-6 md:gap-y-0 justify-between items-center text-gray-900   ">

        <div className="leftContainer  w-full md:w-[55%] lg:w-[50%] p-3   ">

          <h1 className="  text-4xl lg:text-5xl font-bold mb-5 md:mb-7 text-white ">
          Online  Interview Make People <br /> A Better Future.
          </h1>

          <p className="  text-white lg:text-lg mb-5  ">
          An interview is a formal or informal conversation between two or more people, typically between an interviewer and an interviewee. The purpose of an interview is to gather information, assess qualifications, explore opinions, or make decisions. Interviews are commonly used in various contexts, such as employment of development, journalism, research, and admissions.
          </p>

          <button className="btn btn-warning px-12 text-xl">Good Interview</button>
          
        </div>
       
        <div className="rightCOntainer  hidden md:block md:w-[45%] lg:w-[50%]  ">
          <div className="imgContainer  ">

            <img src="https://i.ibb.co/LShdN5N/interview.jpg"  alt=""  className=" w-[700px] h-full rounded-xl "  />
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Future;



