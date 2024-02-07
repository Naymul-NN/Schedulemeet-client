"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMeetings = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: meetings,
    isLoading: meetingLoading,
    refetch,
  } = useQuery({
    queryKey: ["meetings"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/meetings/getMeetings");
      return response.data.meetings;
    },
  });

  return { meetings, meetingLoading, refetch };
};

export default useMeetings;
