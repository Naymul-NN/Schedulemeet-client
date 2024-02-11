"use client";

import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user: userInfo } = useAuth();

  const email = userInfo.email;

  const {
    data: user,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/users/user/${email}`);

      console.log(response.data);
      return response.data.user;
    },
  });

  return { user, userLoading, refetch };
};

export default useUserByEmail;
