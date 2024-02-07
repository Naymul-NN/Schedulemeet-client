import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MeetingRow = ({ meeting, index }) => {
  const { _id, meetingTitle, hostEmail, date } = meeting;

  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
    const res = await axiosSecure.delete(
      `/api/v1/meetings/deleteMeeting/${_id}`
    );

    if (res.data.success) {
      toast.success("Deleted Successfully");
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
