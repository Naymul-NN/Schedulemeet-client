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
                    toast.success("Event added");
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-[#0d0c22] mt-6 px-6 md:px-12 pb-8 md:pb-12 rounded-3xl">

                {/* dividing the form elements */}
                <div className='flex flex-col md:flex-row md:gap-5'>

                    {/* left side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Event Title</span>
                            </label>
                            <input {...register("eventTitle")} type="text" placeholder="Event Title" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Description</span>
                            </label>
                            <input {...register("description")} type="text" placeholder="description" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Date</span>
                            </label>
                            <input {...register("date")} type="date" placeholder="Date" className="input input-bordered text-black" required />
                        </div>
                    </div>

                    {/* right side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Starting Time</span>
                            </label>
                            <input {...register("time")} type="time" placeholder="Time" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Duration</span>
                            </label>
                            {/* <input {...register("hostName")} type="text" placeholder="Host Name" className="input input-bordered text-black" required /> */}
                            <select {...register("duration")} className="select select-bordered w-full" required>
                                <option disabled selected>Duration</option>
                                <option>15 minutes</option>
                                <option>30 minutes</option>
                                <option>45 minutes</option>
                                <option>1 hour</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500 text-sm md:text-lg font-medium">Image</span>
                            </label>
                            <input {...register("image")} type="text" placeholder="Image" className="input input-bordered text-black" required />
                        </div>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-green-700 text-white text-sm md:text-lg">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SetUpEvent;