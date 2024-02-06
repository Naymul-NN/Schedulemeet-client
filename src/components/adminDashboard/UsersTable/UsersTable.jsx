"use client";

import useUsers from "@/components/hooks/useUsers";
import UsersRow from "@/components/adminDashboard/UsersTable/UsersRow/UsersRow";

const UsersTable = () => {
  const { users, userLoading } = useUsers();

  if (userLoading) {
    return <p>loading ...</p>; //TODO: loading spinner will be added
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="text-center text-3xl font-bold text-white">
          Manage Users
        </h3>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th align="center"></th>
              <th align="center">Name</th>
              <th align="center">Email</th>
              <th align="center">Role</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <UsersRow
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

export default UsersTable;
