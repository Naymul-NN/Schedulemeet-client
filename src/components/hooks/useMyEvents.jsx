import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyEvents = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: events,
    isLoading: eventsLoading,
    refetch,
  } = useQuery({
    queryKey: ["events", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/events/events/${user.email}`);

      console.log(res.data);

      return res.data.events;
    },
  });

  return { events, eventsLoading, refetch };
};

export default useMyEvents;
