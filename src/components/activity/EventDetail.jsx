"use client";
import React, { useState } from "react";
import useEvent from "../hooks/useEvent";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";

const EventDetail = ({ id }) => {
  const { event, eventsLoading } = useEvent(id);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  console.log(event);

  if (eventsLoading) {
    return <p className="">loading</p>;
  }

  // const [eventData, setEventData] = useState(event)
  const eventData = event;
  // const { description, duration, eventTitle, image, time} = eventData;
  // console.log(eventData);

  const handleAdvertisementPosting = async (data) => {
    const adInfo = {
      eventId: eventData._id,
      tag: data.tag,
      thumbnail: eventData.image,
      title: eventData.eventTitle,
    };
    const res = await axiosSecure.post("/api/v1/ad/post", adInfo);

    if (res.data.success) {
      toast.success("Ad Posted Successfully");
    }
  };

  return (
    <div className="pt-12 md:pt-20">
      <div className="max-w-[80%] mx-auto  card md:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={eventData.image}
            alt="event-thumbnail"
            width={300}
            height={300}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{eventData.eventTitle}</h2>
          <p className="text-black">{eventData.description}</p>
          <div className="card-actions justify-end">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}>
              Advertise
            </button>
            <dialog
              id="my_modal_4"
              className="modal">
              <div className="modal-box ">
                <h3 className="font-bold text-lg text-black">Advertise</h3>

                <form
                  className="space-y-2 card"
                  onSubmit={handleSubmit(handleAdvertisementPosting)}>
                  <label className="form-control w-full max-w-xs mb-1">
                    <div className="label">
                      <span className="label-text">Tag Line</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      {...register("tag")}
                      required
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Advertisement Duration</span>
                    </div>
                    <select
                      className="select select-bordered mb-1"
                      {...register("adDuration")}>
                      <option disabled>Durations</option>
                      <option>3 Day</option>
                      <option>5 Day</option>
                      <option>7 Day</option>
                    </select>

                    <button className="btn btn-primary btn-sm my-3">
                      Advertise
                    </button>
                  </label>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
