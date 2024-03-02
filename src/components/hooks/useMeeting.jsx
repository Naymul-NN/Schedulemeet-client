"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMeeting = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: meeting,
    isLoading: meetingLoading,
    refetch,
  } = useQuery({
    queryKey: ["meeting", id],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/meetings/getMeetings/${id}`
      );
      return response.data.meeting;
    },
  });

  return { meeting, meetingLoading, refetch };
};

export default useMeeting;
