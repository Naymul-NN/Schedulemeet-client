"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReports = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: reports,
    isLoading: reportsLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/reports/getReports");

      return response.data.reports;
    },
  });

  return { reports, reportsLoading, refetch };
};

export default useReports;
