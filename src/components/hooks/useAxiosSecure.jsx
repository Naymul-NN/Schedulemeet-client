import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // TODO: deploy link will be added

  withCredentials: true,
});

const useAxiosSecure = () => {



    
  return axiosSecure;
};

export default useAxiosSecure;
