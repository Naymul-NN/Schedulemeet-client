"use client"
import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'http://localhost:5000'
    // TODO: deploy link should be added
})
const useAxiospublic = () => {
    return axiosPublic;
};

export default useAxiospublic;