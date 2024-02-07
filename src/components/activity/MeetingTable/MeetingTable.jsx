import useMeetings from "@/components/hooks/useMeetings";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import MeetingRow from "./MeetingRow/MeetingRow";

const MeetingTable = () => {
  const { meetingLoading, meetings, refetch } = useMeetings();

  if (meetingLoading) {
    return <p className="">loading</p>;
  }

  return (
    <div>
      {/*-------------Total scheduled interview data-------------*/}
      <TitleDashboard title={"Scheduled Meetings"}></TitleDashboard>
      <div>
        {meetings.length ? (
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
                {meetings.map((meeting, index) => (
                  <MeetingRow
                    key={meeting._id}
                    index={index}
                    meeting={meeting}
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

export default MeetingTable;
