"use client"

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
// import { AuthContext } from './AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { AuthContext } from './Authprovider';
import SocialLogin from './SocialLogin';


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
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-100 text-black">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
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
      <p className='text-black text-center'>If you are new here! 
      <Link href='/signup' className="text-green-400 font-bold" > Sign up</Link></p>

    </div>
  </div>
</div>
    );
};

export default Signin;