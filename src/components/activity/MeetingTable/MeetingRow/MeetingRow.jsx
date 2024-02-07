import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useMeetings from "@/components/hooks/useMeetings";
import toast from "react-hot-toast";

const MeetingRow = ({ meeting, index }) => {
  const { _id, meetingTitle, hostEmail, date } = meeting;
  const { refetch } = useMeetings();

  const axiosSecure = useAxiosSecure();


//   there will be a modal to confirm the delete
  const handleDelete = async () => {
    const res = await axiosSecure.delete(
      `/api/v1/meetings/deleteMeeting/${_id}`
    );

    if (res.data.success) {
      toast.success("Deleted Successfully");
      refetch()
    }
  };

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{meetingTitle}</td>
      <td align="center">{hostEmail}</td>
      <td align="center">{date}</td>
      <td
        align="center"
        className="space-x-3">
        <button
          onClick={handleDelete}
          className="btn btn-outline btn-error">
          Delete
        </button>
        <button className="btn btn-outline btn-success">Invite</button>
        <button className="btn btn-outline btn-warning">Update</button>
      </td>
    </tr>
  );
};

export default MeetingRow;
