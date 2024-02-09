"use client";

import useBannedUsers from "@/components/hooks/useBannedUsers";
import BannedUsersRow from "./BannedUsersRow/BannedUsersRow";

const BannedUsersTable = () => {
  const { userLoading, users } = useBannedUsers();

  if (userLoading) {
    return <p className="">loading....</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="text-center text-3xl font-bold text-blue-700">
          Manage Users
        </h3>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th align="center"></th>
              <th align="center">Banned User</th>
              <th align="center">Banned By</th>
              <th align="center">Reason</th>
              <th align="center">bannedFrom</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <BannedUsersRow
                key={user._id}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannedUsersTable;
