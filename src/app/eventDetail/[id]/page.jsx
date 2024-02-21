import EventDetail from "@/components/activity/Event/EventDetail";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div className="min-h-screen">
      <EventDetail id={id}></EventDetail>
    </div>
  );
};

export default page;
