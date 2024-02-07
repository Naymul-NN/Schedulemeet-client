"use client"
import useAuth from "@/components/hooks/useAuth";
import useAxiospublic from "@/components/hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const useCheckAdmin = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiospublic();

  const { data: isAdmin, isLoading: adminCheckLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/api/v1/admin/checkAdmin/${user?.email}`
      );

      console.log(response.data)
      return response.data.admin;
    },
  });

  return { isAdmin, adminCheckLoading };
};

export default useCheckAdmin;
