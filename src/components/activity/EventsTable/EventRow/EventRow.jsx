import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useEvents from "@/components/hooks/useEvents";
import toast from "react-hot-toast";

const EventRow = ({ event, index }) => {
  const { _id, eventTitle, hostEmail, date } = event;

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{eventTitle}</td>
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

export default EventRow;
