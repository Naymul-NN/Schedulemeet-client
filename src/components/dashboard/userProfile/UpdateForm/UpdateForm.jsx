"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useUserByEmail from "@/components/hooks/useUserByEmail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const UpdateForm = ({ showUpdate, setShowUpdate, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const { refetch } = useUserByEmail();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (data) => {
    setIsLoading(true);
    try {
      const update = {
        name: data.name,
        img: data.img,

        city: data.city,
        country: data.country,
      };

      const res = await axiosSecure.put(
        `/api/v1/users/update/${user._id}`,
        update
      );

      if (res.data.success) {
        toast.success("Info updated successfully");
        refetch();
        reset();
        setIsLoading(false);
        setShowUpdate(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`h-max w-[50%] ${
        showUpdate ? "block" : "hidden"
      } left-[25%] absolute transition-shadow  ${
        showUpdate
          ? "userAnimation top-[10%] opacity-100"
          : "top-[-200%] userAnimation2"
      } right-[25%]  border-[1px] border-[#0000003d] z-50 py-10 shadow-lg p-4 rounded-md bg-gray-100`}>
      {" "}
      <h2 className="text-center font-bold">Update Your Profile</h2>
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="flex flex-col items-center justify-center gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> your name</span>
          </div>
          <input
            type="text"
            placeholder={user.name ? user.name : "your full name"}
            className="input input-bordered w-full max-w-xs  bg-sky-100"
            defaultValue={user?.name}
            {...register("name")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> your image</span>
          </div>
          <input
            type="text"
            placeholder={user.img ? user.img : "your image"}
            className="input input-bordered w-full max-w-xs  bg-sky-100"
            defaultValue={user?.img}
            {...register("img")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> your city</span>
          </div>
          <input
            type="text"
            placeholder={user.city ? user.city : "your city"}
            className="input input-bordered w-full max-w-xs  bg-sky-100"
            defaultValue={user?.city}
            {...register("city")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> your country</span>
          </div>
          <input
            type="text"
            placeholder={user.country ? user.country : "your country"}
            className="input input-bordered w-full max-w-xs  bg-sky-100"
            defaultValue={user?.country}
            {...register("country")}
          />
        </label>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-success">
            {isLoading ? (
              <FaSpinner className="mx-auto animate-spin text-xl" />
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
      <div className="flex justify-end">
        <button
          onClick={() => setShowUpdate(false)}
          className="bg-red-500 px-2 py-1 text-white rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
