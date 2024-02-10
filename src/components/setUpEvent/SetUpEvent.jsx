'use client'
import React from 'react';
import TitleDashboard from '../../shared/TitleDashboard/TitleDashboard.jsx';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from "axios";

const SetUpEvent = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
     
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
      } 

    return (
        <div className='mt-12 w-[80%] mx-auto'>
            <TitleDashboard title={"Set Your Event"}></TitleDashboard>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                {/* dividing the form elements */}
                <div className='flex gap-5'>

                    {/* left side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("hostEmail")} type="email" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Title</span>
                            </label>
                            <input {...register("eventTitle")} type="text" placeholder="Event Title" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Host Name</span>
                            </label>
                            <input {...register("hostName")} type="text" placeholder="Host Name" className="input input-bordered text-black" required />
                        </div>

                    </div>

                    {/* right side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input {...register("date")} type="date" placeholder="Date" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input {...register("time")} type="time" placeholder="Time" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Link</span>
                            </label>
                            <input {...register("eventLink")} type="text" placeholder="Event Link" className="input input-bordered text-black" required />
                        </div>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-green-500 text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SetUpEvent;