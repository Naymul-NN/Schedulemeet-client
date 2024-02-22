"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "@/components/hooks/useAuth";
import useAxiospublic from "@/components/hooks/useAxious";

const BookingModal = ({ event }) => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiospublic();

  const { user } = useAuth();
  const { _id, hostName, date, time, title,link } = event;
  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  const handleBooking = async (data) => {
    try {
      const bookingInfo = {
        _id,
        guestEmail: data.email,
        hostName,
        guestName: data.name,
        date: formattedDate,
        time,
        title,
        link
      };

      const res = await axiosPublic.put("/api/v1/events/bookEvent", bookingInfo);

      console.log(res.data);

      if (res.data.success) {
        toast.success("Event Booked Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <dialog
      id="booking"
      className="modal">
      <div className="modal-box ">
        <h3 className="font-bold text-lg text-black">Advertise</h3>

        <form
          className="space-y-2 card"
          onSubmit={handleSubmit(handleBooking)}>
          <label className="form-control w-full max-w-xs mb-1">
            <div className="label">
              <span className="label-text">Your Name</span>
            </div>
            <input
              type="text"
              placeholder={user?.displayName || "Your Name"}
              defaultValue={user?.displayName}
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
              required
            />
          </label>
          <label className="form-control w-full max-w-xs mb-1">
            <div className="label">
              <span className="label-text">Your Email</span>
            </div>
            <input
              type="email"
              placeholder={user?.email || "Your Name"}
              defaultValue={user?.email}
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
              required
            />
          </label>

          <button className="btn btn-primary btn-sm my-3 max-w-xs">Book</button>
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

export default BookingModal;
