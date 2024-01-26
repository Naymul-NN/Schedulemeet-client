'use client'
import TitleDashboard from '@/shared/TitleDashboard/TitleDashboard';
import React from 'react';
import { useForm } from "react-hook-form"

const SetUpInterview = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
     
      const onSubmit = (data) => {
        console.log(data);
      }  

    return (
        <div>
            <TitleDashboard title={"Set Your Interview"}></TitleDashboard>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                {/* dividing the form elements */}
                <div className='flex gap-5'>

                    {/* left side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Title</span>
                            </label>
                            <input {...register("meeting-title")} type="text" placeholder="Meeting Title" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Host Name</span>
                            </label>
                            <input {...register("host-name")} type="text" placeholder="Host Name" className="input input-bordered text-black" required />
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
                            <input {...register("meeting-link")} type="text" placeholder="Meeting Link" className="input input-bordered text-black" required />
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

export default SetUpInterview;