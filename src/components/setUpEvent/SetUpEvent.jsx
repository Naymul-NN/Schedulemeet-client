"use client";
import React from "react";
import TitleDashboard from "../../shared/TitleDashboard/TitleDashboard.jsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const SetUpEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/api/v1/events/createEvent", data)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          toast.success("Meeting added");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    // toast.success('Interview scheduled successfully!');
  };

  return (
    <div className="setEventContainer min-h-screen  flex justify-center items-center bg-gray-50  ">
      <div className=" setEventWrapper   ">
        {/* title starts  */}
        <TitleDashboard title={"Set Your Event "}></TitleDashboard>
        {/* title ends */}

        {/* form section starts  */}

        <div className="formSection bg-gray-400  border border-gray-200 rounded-md mt-8 shadow-md w-[92%]  xmd:w-[98%] lg:w-full  m-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body">
            {/* dividing the form elements */}
            <div className="flex  flex-col xsm:flex-row  gap-0 xsm:gap-5">
              {/* left side elements */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">Email</span>
                  </label>
                  <input
                    {...register("hostEmail")}
                    type="email"
                    placeholder="email"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">
                      Event Title
                    </span>
                  </label>
                  <input
                    {...register("eventTitle")}
                    type="text"
                    placeholder="Event Title"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">Host Name</span>
                  </label>
                  <input
                    {...register("hostName")}
                    type="text"
                    placeholder="Host Name"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
              </div>

              {/* right side elements */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">Date</span>
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    placeholder="Date"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">Time</span>
                  </label>
                  <input
                    {...register("time")}
                    type="time"
                    placeholder="Time"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-950">
                      Meeting Link
                    </span>
                  </label>
                  <input
                    {...register("meetingLink")}
                    type="text"
                    placeholder="Meeting Link"
                    className="w-full sm:w-[97%] xmd:w-full input input-bordered text-gray-950 bg-gray-300"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600 text-white">Submit</button>
            </div>
          </form>
        </div>

        {/* form section ends  */}
      </div>
    </div>
  );
};

export default SetUpEvent;
