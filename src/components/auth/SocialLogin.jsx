"use client"
import { useContext } from "react";
// import { AuthContext } from "../auth/AuthProvider";
// import useAxiospublic from "../hooks/useAxiospublic";
// import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { AuthContext } from "./Authprovider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
                    email: result.user?.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL
                }
                // fetch('http://localhost:5000/saveUser',{
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(userInfo),
                // })
                // .then(res => res.json())
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
                <button onClick={handlegooglesignin} className="btn">
                    <FaGoogle></FaGoogle>
                    go with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;