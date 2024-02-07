import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useUsers from "@/components/hooks/useUsers";

const AdminRow = ({ admin, index }) => {
  const { _id, name, email, role } = admin;
  const { refetch } = useUsers();
  const axiosSecure = useAxiosSecure();

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{name}</td>
      <td align="center">{email}</td>
    </tr>
  );
};

export default AdminRow;
