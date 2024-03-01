"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useBannedUsers from "@/components/hooks/useBannedUsers";
import formateDate from "@/util/formateDate";
import toast from "react-hot-toast";

const BannedUsersRow = ({ user, index }) => {
  const { _id, userId, userEmail, bannedBy, reason, bannedFrom } = user;

  const formattedDate = formateDate(bannedFrom);

  const { refetch } = useBannedUsers();
  const axiosSecure = useAxiosSecure();

  const handleRemoveBan = async () => {
    try {
      const res = await axiosSecure.delete(`/api/v1/ban/unBan/${_id}`, {
        data: { userId },
      });

      if (res.data.success) {
        toast.success("Operation Successful");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePermanentBan = async () => {
    const banInfo = {
      userId,
      banId: _id,
    };

    const res = await axiosSecure.put("/api/v1/ban/permanent", banInfo);

    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{userEmail}</td>
      <td align="center">{bannedBy}</td>
      <td align="center">{reason}</td>
      <td align="center">{formattedDate}</td>
      <td
        className="space-x-3 "
        align="center">
        <button
          onClick={handleRemoveBan}
          className="btn  btn-success ">
          Remove Ban
        </button>
        <button
          onClick={handlePermanentBan}
          className="btn  btn-warning mx-2">
          Ban Permanent
        </button>
      </td>
    </tr>
  );
};

export default BannedUsersRow;
