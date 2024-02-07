"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import logo from "../../assets/logo/page.png";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEyeSlash, FaEye, FaSpinner } from "react-icons/fa";
import useAxiospublic from "../hooks/useAxious";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { createUser } = useAuth();
  const axios = useAxiospublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setLoading(true);

    try {
      const { email, password } = data;

      await createUser(email, password);

      const res = await axios.post("/api/v1/users/saveUser", { email });

      if (res.data.success) {
        toast.success("Congratulations, Registration Successful");
      }
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

        {/* register form */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card-body text-black">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>

            {/* email info */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered text-white"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            {/* password info */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered text-white"
                {...register("password", { required: "password is required" })}
                // TODO: password validation will added later
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
                {/* TODO: no need to forget password in register form */}
                <Link
                  href="#"
                  className="label-text-alt link link-hover">
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
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="text-black text-center my-4">
            if you have already an account !
            <Link
              href="/login"
              className="text-orange-600 font-bold">
              {" "}
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
