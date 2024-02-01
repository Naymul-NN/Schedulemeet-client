"use client"

import Link from "next/link";
import { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "./Authprovider";
import SocialLogin from "./SocialLogin";
import logo from '../../assets/logo/page.png';
import Image from "next/image"


const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();
    // const name = e.target.name.value; 
    // const photoUrl= e.target.photo.value;
    const email = e.target.email.value; 
    const password = e.target.password.value ;
    console.log(email,password);


    createUser(email,password)
    .then(result =>{
      console.log(result.user)
      toast.success('Congratulation ! register seccessfull')
       
    })
    .catch(error => {
     console.error(error)
    })
  
};

    return (
      <div className="hero min-h-screen bg-blue-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className="text-center lg:text-left  mr-24">
  <Image
              src={logo}
              alt=""
              className="  rounded-xl "
              width={600}
              height={550}
            />
          
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
      <form onSubmit={handleRegister}  className="card-body text-black">
        <div className="form-control">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Signup</button>
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className="text-black text-center my-4">if you have alrady an account !<Link href='/login' className="text-orange-600 font-bold"> login</Link></p>

    </div>
  </div>
</div>
    );
};

export default Register;