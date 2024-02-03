"use client"
import { useContext } from "react";
// import { AuthContext } from "../auth/AuthProvider";
// import useAxiospublic from "../hooks/useAxiospublic";
// import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
// import axios from "axios";
import { AuthContext } from "./Authprovider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import useAxiospublic from "../hooks/useAxious";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    // const axiosPublic = useAxiospublic();
    // const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const home = useRouter();
    const handlegooglesignin = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user?.email,
                    img: result.user.photoURL
                }
                console.log(userInfo);
                // axiosPublic.post('/api/v1/webusers', userInfo)
                // .then(res =>{
                //     console.log(res.data);   
                // })
                toast.success('log in successfull')
                home.push("/")
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="p-6 flex justify-center items-center">
            <div>
                <button onClick={handlegooglesignin} className="btn btn-outline btn-primary px-6">
                    <FaGoogle></FaGoogle>
                    go with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;