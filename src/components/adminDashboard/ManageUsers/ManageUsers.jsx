"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UsersTable from "./UsersTable/UsersTable";

const ManageUsers = () => {
  return (
    <Tabs className="w-11/12 mx-auto">
      <TabList align={"center"}>
        <Tab>Users</Tab>
        <Tab>Admins</Tab>
      </TabList>

      <TabPanel>
        <UsersTable />
      </TabPanel>
      <TabPanel>
        <h2>Admin table will show here</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ManageUsers;
