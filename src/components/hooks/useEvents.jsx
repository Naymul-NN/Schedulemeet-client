"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxious";

const useEvents = () => {
  const axiosPublic = useAxiospublic();

  const {
    data: events,
    isLoading: eventsLoading,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await axiosPublic.get("/api/v1/events/getEvents");
      return response.data.events;
    },
  });

  return { events, eventsLoading, refetch };
};

export default useEvents;
