"use client";
import useAuth from "@/components/hooks/useAuth";
import useAxiospublic from "@/components/hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const useCheckAdmin = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiospublic();

  const { data: isAdmin, isLoading: adminCheckLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      if (user) {
        const response = await axiosPublic.get(
          `/api/v1/admin/checkAdmin/${user?.email}`
        );

        return response.data.admin;
      }

      return { isAdmin: false };
    },
  });

  return { isAdmin, adminCheckLoading };
};

export default useCheckAdmin;
