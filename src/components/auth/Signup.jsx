"use client"

import Link from "next/link";
import { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "./Authprovider";
import SocialLogin from "./SocialLogin";



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
      <div className="hero min-h-screen bg-green-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-pink-200">
      <form onSubmit={handleRegister}  className="card-body text-black">
        <div className="form-control">
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
          <button className="btn btn-primary">Signup</button>
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className="text-black text-center">if you have alrady an account !<Link href='/login' className="text-green-500 font-bold"> login</Link></p>

    </div>
  </div>
</div>
    );
};

export default Register;