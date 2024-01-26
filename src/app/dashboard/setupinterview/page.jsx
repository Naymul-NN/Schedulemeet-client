import Title from '@/shared/Title/title';
import TitleDashboard from '@/shared/TitleDashboard/TitleDashboard';
import React from 'react';

const Setupinterview = () => {
    return (
        <div className='pt-20'>
            <TitleDashboard title={"Set Your Interview"}></TitleDashboard>
            <form className="card-body">

                {/* dividing the form elements */}
                <div className='flex gap-5'>

                    {/* left side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Title</span>
                            </label>
                            <input type="title" placeholder="Meeting Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Host Name</span>
                            </label>
                            <input type="host-name" placeholder="Host Name" className="input input-bordered" required />
                        </div>

                    </div>

                    {/* right side elements */}
                    <div className='flex-1'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="time" placeholder="Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Link</span>
                            </label>
                            <input type="meeting-link" placeholder="Meeting Link" className="input input-bordered" required />
                        </div>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Setupinterview;