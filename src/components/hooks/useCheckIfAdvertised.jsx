"use client";

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCheckIfAdvertised = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdvertised,
    isLoading: checkLoading,
    refetch,
  } = useQuery({
    queryKey: ["ad", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/demos/check/${id}`);

      console.log(res.data);

      return res.data.isAdvertised;
    },
  });

  return { isAdvertised, checkLoading, refetch };
};

export default useCheckIfAdvertised;
