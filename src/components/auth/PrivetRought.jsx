// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../auth/AuthProvider";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import Link from 'next/link';

const Privet = ({children}) => {
    const home = useRouter()
        // const location = useLocation()
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
  if(user){
    return children;
}

 return home.push("/login")

};

export default Privet;