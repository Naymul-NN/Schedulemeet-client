"use client"
import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'http://localhost:5000'
    // baseURL:'https://schedule-meet-server.vercel.app'
})
const useAxiospublic = () => {
    return axiosPublic;
};

export default useAxiospublic;