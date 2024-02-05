import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [userLoading, setUserLoading] = useState(false);

  // TODO: will replace with tanstack

  useEffect(() => {
    const getUsers = async () => {
      setUserLoading(true);
      const response = await axiosSecure.get("/api/v1/users/getUsers");
      setUserLoading(false);
      return response.data;
    };

    getUsers();
  }, [axiosSecure]);

  return { users, userLoading };
};

export default useUsers;
