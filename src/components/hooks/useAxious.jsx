"use client";
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: process.env.NEXT_DB_URL,

  withCredentials: true,
});
const useAxiospublic = () => {
  return axiosPublic;
};

export default useAxiospublic;
