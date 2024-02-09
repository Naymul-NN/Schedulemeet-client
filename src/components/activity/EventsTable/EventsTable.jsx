import useEvents from "@/components/hooks/useEvents";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import EventRow from "./EventRow/EventRow";
import EventCard from '../EventCard';

const EventsTable = () => {
  const { eventsLoading, events } = useEvents();

  if (eventsLoading) {
    return <p className="">loading</p>;
  }

  return (
    <div>
      {/*-------------Total scheduled Events data-------------*/}
      <TitleDashboard title={"Scheduled Events"}></TitleDashboard>
      <div className="my-12">
        {events?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {events.map((event, index) => (
                  <EventCard
                  key={event._id}
                    index={index}
                    event={event}
                  ></EventCard>
                ))}
          </div>
        ) : (
          <h3 className="text-center my-10 tex-4xl text-blue-600 font-bold">
            You don{"'"}t have any meeting{" "}
          </h3>
        )}
      </div>
    </div>
  );
};

export default EventsTable;
