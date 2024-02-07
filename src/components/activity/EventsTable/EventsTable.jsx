import useEvents from "@/components/hooks/useEvents";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import EventRow from "./EventRow/EventRow";

const EventsTable = () => {
  const { eventsLoading, events } = useEvents();

  if (eventsLoading) {
    return <p className="">loading</p>;
  }

  return (
    <div>
      {/*-------------Total scheduled Events data-------------*/}
      <TitleDashboard title={"Scheduled Events"}></TitleDashboard>
      <div>
        {events?.length ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th align="center">Title</th>
                  <th align="center">Host Email</th>
                  <th align="center">Date</th>
                  <th align="center">Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <EventRow
                    key={event._id}
                    index={index}
                    event={event}
                  />
                ))}
              </tbody>
            </table>
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
