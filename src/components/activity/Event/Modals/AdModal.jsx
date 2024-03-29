"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useCheckIfAdvertised from "@/components/hooks/useCheckIfAdvertised";

const AdModal = ({ event }) => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const { _id, image, title } = event;

  const { refetch } = useCheckIfAdvertised(_id);

  const handleAdvertisementPosting = async (data) => {
    const adInfo = {
      eventId: _id,
      tag: data.tag,
      thumbnail: image,
      title: title,
      expiresIn: data.adDuration,
    };
    const res = await axiosSecure.post("/api/v1/demos/post", adInfo);

    if (res.status === 400) {
      toast.error("No more quota for advertisement");
    }

    if (res.data.success) {
      toast.success("Ad Posted Successfully");
      refetch();
    }
  };

  return (
    <dialog
      id="my_modal_4"
      className="modal">
      <div className="modal-box bg-base-100">
        <h3 className="font-bold text-lg text-primary">Advertise</h3>

        <form
          className="space-y-2 card"
          onSubmit={handleSubmit(handleAdvertisementPosting)}>
          <label className="form-control w-full max-w-xs mb-1">
            <div className="label">
              <span className="label-text  font-medium text-info">
                Tag Line
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-neutral text-info-content"
              {...register("tag")}
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-medium text-info">
                Advertisement Duration
              </span>
            </div>
            <select
              className="select select-bordered mb-1 bg-neutral text-info-content"
              {...register("adDuration")}>
              <option disabled>Durations</option>
              <option>3 Day</option>
              <option>5 Day</option>
              <option>7 Day</option>
            </select>
          </label>
          <button className="btn btn-primary btn-sm my-3 max-w-xs">
            Advertise
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

export default AdModal;
