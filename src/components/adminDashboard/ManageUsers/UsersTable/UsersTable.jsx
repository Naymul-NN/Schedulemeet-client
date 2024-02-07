"use client";

import useUsers from "@/components/hooks/useUsers";
import UsersRow from "./UsersRow/UsersRow";

const UsersTable = () => {
  const { users, userLoading } = useUsers();

  if (userLoading) {
    return <p>loading ...</p>; //TODO: loading spinner will be added
  }

  const notAdmin = users.filter((user) => user?.role !== "admin");

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
              <th align="center">Name</th>
              <th align="center">Email</th>
              <th align="center">Role</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {notAdmin?.map((user, index) => (
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
