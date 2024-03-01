"use client";

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import logo from "../../assets/logo/loginPge.png";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userLogin } = useAuth();

  const home = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const { email, password } = data;

      await userLogin(email, password);
      home.push("/");
      toast.success("Login successfully");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setLoading(false);
    }
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

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card-body">
            <h1 className="text-4xl font-bold text-center text-red-400">
              Login
            </h1>

            {/* email info */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered border-gray-500 text-black bg-white"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            {/* password info */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium text-black">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered bg-white text-black border-gray-500"
                {...register("password", { required: "password is required" })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-lg text-white top-12 right-1 cursor-pointer">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
              <label className="label">
                {/* TODO: will implement later */}
                <Link
                  href="#"
                  className="label-text-alt link text-black link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-warning">
                {loading ? (
                  <FaSpinner className="mx-auto animate-spin text-xl" />
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="my-4 text-center text-black">
            If you are new here!
            <Link
              href="/signup"
              className="text-orange-600 font-bold">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
