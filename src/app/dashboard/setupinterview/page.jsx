import Scheduler from "@/components/react-scheduler/Scheduler.jsx";
import SetUpInterview from "../../../components/setUpInterview/SetUpInterview.jsx";
import React from "react";

const Setupinterview = () => {
  return (
    <div className=" min-h-screen bg-gray-50 mt-12">
      {/* <SetUpInterview></SetUpInterview> */}
      <Scheduler></Scheduler>
    </div>
  );
};

export default Setupinterview;
