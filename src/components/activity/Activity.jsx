"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import useMeetings from "@/components/hooks/useMeetings";
import MeetingTable from "./MeetingTable/MeetingTable";

const Activity = () => {
  const [interviews, setInterviews] = useState([]);
  const [events, setEvents] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://schedule-meet-server.vercel.app/api/v1/meetings/deleteMeeting/${id}`
      )
      .then((res) => {
        console.log("deleted", id);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id) => {
    console.log("updated", id);
  };

  const handleInvite = (id) => {
    console.log("invited", id);
  };

  return (
    <>
      <MeetingTable />
    </>
  );
};

export default Activity;
