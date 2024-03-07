import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";

import useMyEvents from "@/components/hooks/useMyEvents";
import EventCard from "../EventCard";

const EventsTable = () => {
  const { eventsLoading, events } = useMyEvents();

  if (eventsLoading) {
    return <p className="">loading</p>;
  }

  return (
    <div>
      {/*-------------Total scheduled Events data-------------*/}
      <TitleDashboard title={"Scheduled Events"}></TitleDashboard>
      <div className="my-12">
        {events?.length ? (
          <div className=" my-10 h-[200px] p-3 rounded-xl bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-co
      ls-3 space-y-4 space-x-3">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-center my-10 tex-4xl text-blue-600 font-bold">
            You don{"'"}t have any Event{" "}
          </h3>
        )}
      </div>
    </div>
  );
};

export default EventsTable;
