import axios from "axios";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_DB_URL,

  withCredentials: true,
}); 

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
