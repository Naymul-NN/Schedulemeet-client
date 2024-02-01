"use client"

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
// import { AuthContext } from './AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { AuthContext } from './Authprovider';
import SocialLogin from './SocialLogin';
import logo from '../../assets/logo/loginPge.png';
import Image from "next/image"

const Signin = () => {

    const {googleLogin, userLogin} = useContext(AuthContext);
    const home = useRouter();

    // const navigat = () => {
    //     home.push("/");
    // }

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value ;
      
        
         userLogin(email,password)
         .then(result =>{
          console.log(result.user)
          toast.success('log in successfull')
           home.push("/")
         })
         .catch(error=>{
          console.error(error)
          
         })
      
      }


    return (
        <div className="hero min-h-screen bg-blue-300">
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

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-4xl font-bold text-center text-red-400">Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className='my-4 text-center text-black'>If you are new here! 
      <Link href='/signup' className="text-orange-600 font-bold" > Sign up</Link></p>

    </div>
  </div>
</div>
    );
};

export default Signin;