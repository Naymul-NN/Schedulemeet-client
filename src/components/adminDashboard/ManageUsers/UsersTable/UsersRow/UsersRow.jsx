import useAuth from "@/components/hooks/useAuth";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useUsers from "@/components/hooks/useUsers";
import toast from "react-hot-toast";

const UsersRow = ({ user, index }) => {
  const { _id, name, email, role } = user;
  const { refetch } = useUsers();
  const axiosSecure = useAxiosSecure();

  const { user: admin } = useAuth();

  const handleMakeAdmin = async () => {
    try {
      const userRole = {
        role: "admin",
      };

      const res = await axiosSecure.put(
        `/api/v1/admin/makeAdmin/${_id}`,
        userRole
      );

      if (res.data.success) {
        toast.success("Changed Role Successful");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBanUser = async (req, res) => {
    try {
      const banInfo = {
        bannedBy: admin.email,
        userEmail: user.email,
        userId: user._id,
        reason: "Spam", 
        bannedFrom:new Date().toLocaleDateString("en-UK"),
      };

      console.log(banInfo);

      const res = await axiosSecure.post(`/api/v1/ban/banUser`,banInfo);

      if(res.data.success){
        toast.success("The user is banned successfully")
        refetch()
      }

      console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{name}</td>
      <td align="center">{email}</td>
      <td align="center">{role}</td>
      <td
        className="space-x-3 "
        align="center">
        <button
          onClick={handleMakeAdmin}
          disabled={role === "admin"}
          className="btn btn-outline btn-success ">
          Make Admin
        </button>

        <button onClick={handleBanUser} className="btn  btn-error">Ban User</button>
      </td>
    </tr>
  );
};

export default UsersRow;
