import useAxiosSecure from "@/components/hooks/useAxiosSecure";

const MeetingRow = ({ meeting, index }) => {
  const { meetingTitle, hostEmail, date } = meeting;


  const axiosSecure=useAxiosSecure()

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{meetingTitle}</td>
      <td align="center">{hostEmail}</td>
      <td align="center">{date}</td>
      <td
        align="center"
        className="space-x-3">
        <button className="btn btn-outline btn-error">Delete</button>
        <button className="btn btn-outline btn-success">Invite</button>
        <button className="btn btn-outline btn-warning">Update</button>
      </td>
    </tr>
  );
};

export default MeetingRow;
