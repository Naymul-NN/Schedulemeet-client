"use client"


import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxious";

const useAds = () => {
  const axiosPublic = useAxiospublic();

  const { data: ads, isLoading: adsLoading } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/demos/get");
    
      return res.data.ads;
    },
  });

  return { ads, adsLoading };
};

export default useAds;
