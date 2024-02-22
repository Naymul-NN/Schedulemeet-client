"use client";

import Title from "@/shared/Title/title";
import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard/EventCard";

const Events = () => {
  const { events, eventsLoading } = useEvents();

  if (eventsLoading) {
    return <p> loading ...</p>;
  }

  return (
    <div className="my-10">
      <Title title={"Upcoming Events"} />

      <div
        className="max-w-7xl my-10 mx-auto p-3 rounded-xl bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-co
      ls-3 space-y-4 space-x-3">
        {events?.map((event) => (
          <EventCard
            key={event._id}
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
