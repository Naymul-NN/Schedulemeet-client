"use client";

import useUsers from "@/components/hooks/useUsers";
import AdminRow from "./AdminRow/AdminRow";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";

const AdminTable = () => {
  const { users, userLoading } = useUsers();

  if (userLoading) {
    return <p>loading ...</p>; //TODO: loading spinner will be added
  }

  const admins = users.filter((user) => user?.role === "admin");

  return (
    <div>
      <div className="overflow-x-auto">
      <TitleDashboard title={"View Admins"} />

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th align="center"></th>
              <th align="center">Name</th>
              <th align="center">Email</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {admins?.map((admin, index) => (
              <AdminRow
                key={admin._id}
                admin={admin}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
