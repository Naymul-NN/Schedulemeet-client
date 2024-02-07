"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/admin/getUsers");
      return response.data.users;
    },
  });

  return { users, userLoading, refetch };
};

export default useUsers;
