import axios from "axios";
import useAuth from "@/components/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_DB_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      async (res) => {
        return res;
      },

      async (err) => {
        try {
          if (err.response.status === 401 || err.response.status === 403) {
            toast.error("Unauthorized");
            await logOut();
            router.push("/login");
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, [logOut, router]);

  return axiosSecure;
};

export default useAxiosSecure;
