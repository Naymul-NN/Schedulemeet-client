"use client";

import useAuth from "@/components/hooks/useAuth";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useUsers from "@/components/hooks/useUsers";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BanModal = ({ user }) => {
  const { name } = user;
  const { user: admin } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { refetch } = useUsers();

  const { register, handleSubmit } = useForm();

  const handleBanUser = async (data) => {
    try {
      const banInfo = {
        bannedBy: admin.email,
        userEmail: user.email,
        userId: user._id,
        reason: data.reason,
        bannedFrom: new Date().toLocaleDateString("en-UK"),
      };

      const res = await axiosSecure.post(`/api/v1/ban/banUser`, banInfo);

      if (res.data.success) {
        toast.success("The user is banned successfully");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <dialog
      id="ban"
      className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-100">
        <h3 className="font-bold text-lg">Ban {name}</h3>
        <form
          onSubmit={handleSubmit(handleBanUser)}
          className="bg-neutral">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">Spam</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-green-500"
                value={"spam"}
                {...register("reason")}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">
                Multiple Reports
              </span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-green-500"
                value={"multiple reports"}
                {...register("reason")}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">Fraud</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-green-500"
                value={"Fraud"}
                {...register("reason")}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">
                Plagiarism
              </span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-green-500"
                value={"Plagiarism"}
                {...register("reason")}
              />
            </label>
          </div>
          <div className="flex">
            <button className="btn btn-success">Ban</button>
          </div>
        </form>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BanModal;
