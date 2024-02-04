"use client";
import { useContext, useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { AuthContext } from "./Authprovider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAxiospublic from "@/components/hooks/useAxious";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const axiosPublic = useAxiospublic();

  const [loading, setLoading] = useState(false);

  const home = useRouter();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await googleLogin();

      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
        img: result.user.photoURL,
      };

      const res = await axiosPublic.post("/api/v1/users/saveUser", userInfo);

      if (res.data.success) {
        home.push("/");
        toast.success("Login Successfully");
      }
      setLoading(false);
    } catch (error) {
      if (error.status !== 200) {
        console.log(error);
      } else {
        toast.error(error.message);
        console.log(error);
      }

      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex justify-center items-center">
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-primary px-6">
          {loading ? (
            <FaSpinner className="mx-auto animate-spin text-xl" />
          ) : (
            <span className="flex gap-3">
              <FaGoogle /> Continue with Google
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
