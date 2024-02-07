"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEvents = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: events,
    isLoading: eventsLoading,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/events/getEvents");
      return response.data.events;
    },
  });

  return { events, eventsLoading, refetch };
};

export default useEvents;
