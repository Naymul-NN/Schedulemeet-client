"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useAuth from "@/components/hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const InviteModal = ({ event }) => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const { hostName, _id, title, date } = event;

  const handleInviteUser = async (data) => {
    const inviteInfo = {
      invitedEmail: data.invitedEmail,
      inviteeEmail: user?.email,
      hostName: hostName,
      eventId: _id,
      eventTitle: title,
      date: date,
    };

    console.log(inviteInfo);

    const res = await axiosSecure.post(
      "/api/v1/invites/inviteUser",
      inviteInfo
    );

    if (res.status === 400) {
      toast.error("User email doesn't exits in database");
      return;
    }

    if (res.data.success) {
      toast.success("Invited Successfully");
    }
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal">
      <div className="modal-box ">
        <h3 className="font-bold text-lg text-primary text-center">
          Invite Others
        </h3>

        <form
          className="space-y-2 card"
          onSubmit={handleSubmit(handleInviteUser)}>
          <label className="form-control w-full max-w-xs mb-1">
            <div className="label">
              <span className="label-text">Users Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("invitedEmail")}
              required
            />
          </label>

          <button className="btn btn-primary btn-sm max-w-xs my-3">
            Invite
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default InviteModal;
