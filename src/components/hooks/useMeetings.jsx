"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import useAuth from "./useAuth";

const useMeetings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: meetings,
    isLoading: meetingLoading,
    refetch,
  } = useQuery({
    queryKey: ["meetings"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/meetings/meetings/${user.email}`);
      return response.data.meetings;
    },
  });

  return { meetings, meetingLoading, refetch };
};

export default useMeetings;
