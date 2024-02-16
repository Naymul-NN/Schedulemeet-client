"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEvent = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: event,
    isLoading: eventsLoading,
    refetch,
  } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/events/getEvent/${id}`);
      return response.data.event;
    },
  });

  return { event, eventsLoading, refetch };
};

export default useEvent;
