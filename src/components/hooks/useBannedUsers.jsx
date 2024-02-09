"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBannedUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["bannedUsers"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/ban/getBanned");

      console.log(response.data)
      return response.data.banUsers;
    },
  });

  return { users, userLoading, refetch };
};

export default useBannedUsers;
