"use client";

import EventsTable from "./EventsTable/EventsTable";
import MeetingTable from "./MeetingTable/MeetingTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Activity = () => {
  return (
    <Tabs className="w-11/12 mx-auto">
      <TabList align={"center"}>
        <Tab>Meetings</Tab>
        <Tab>Events</Tab>
      </TabList>

      <TabPanel>
        <MeetingTable />
      </TabPanel>
      <TabPanel>
        <EventsTable />
      </TabPanel>
    </Tabs>
  );
};

export default Activity;
