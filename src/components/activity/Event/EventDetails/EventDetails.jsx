"use client";

import useEvent from "@/components/hooks/useEvent";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const EventDetails = ({ id }) => {
  const { event, eventsLoading } = useEvent(id);

  if (eventsLoading) {
    return <p>loading ...</p>;
  }
  const { image, title, description, date, time, fee } = event;

  console.log(time);

  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  return (
    <div className="w-4/5 mx-auto my-10 flex flex-col items-center justify-center space-y-3">
      <Image
        src={image}
        alt={title}
        width={500}
        height={400}
        className={"rounded-xl shadow-xl w-full max-h-72 max-w-full mx-auto"}
      />

      <div>
        <h1 className="text-center text-primary text-4xl font-bold">{title}</h1>
        <h4 className="text-center text-info text-2xl font-bold">
          {description}
        </h4>
      </div>

      <div className="flex justify-around items-center text-accent space-x-6">
        <div className="inline-flex">
          <FaCalendarAlt className="m-1 text-2xl" />{" "}
          <p className="text-xl">{formattedDate}</p>
        </div>
        <div className="inline-flex">
          <FaClock className="m-1 text-2xl" /> <p className="text-xl">{time}</p>
        </div>
        <div />
      </div>

      <div className="flex">
        <button className="btn btn-success rounded-md ">Book for ${fee}</button>
      </div>
    </div>
  );
};

export default EventDetails;
