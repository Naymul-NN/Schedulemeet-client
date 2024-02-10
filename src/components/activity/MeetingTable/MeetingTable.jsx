import useMeetings from "@/components/hooks/useMeetings";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import MeetingRow from "./MeetingRow/MeetingRow";
import MeetingCard from "../MeetingCard";

const MeetingTable = () => {
  const { meetingLoading, meetings } = useMeetings();

  if (meetingLoading) {
    return <p className="">loading</p>;
  }

  return (
    <div>
      {/*-------------Total scheduled interview data-------------*/}
      <TitleDashboard title={"Scheduled Meetings"}></TitleDashboard>
      <div className="my-12">
        {meetings?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {meetings.map((meeting, index) => (
                  <MeetingCard 
                  key={meeting._id}
                    index={index}
                    meeting={meeting}></MeetingCard>
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

export default MeetingTable;
