import React from 'react';
import useMeetings from '../hooks/useMeetings';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Link from 'next/link';

const EventCard = ({ event, index }) => {

    const { _id, eventTitle, hostEmail, date } = event;
    const { refetch } = useMeetings();
    const axiosSecure = useAxiosSecure();

    //   there will be a modal to confirm the delete
    const handleDelete = async () => {
        const res = await axiosSecure.delete(
            `/api/v1/events/deleteEvent/${_id}`
        );

        if (res.data.success) {
            toast.success("Deleted Successfully");
            refetch()
        }
    };

    return (
        <div>
            <div className="bg-[#0d0c22] text-primary-content rounded-lg">
                <div className="card-body">
                    <h2 className="card-title">{eventTitle}</h2>
                    <p>{date}</p>
                    <p>One on one</p>
                    <div className="card-actions justify-between">
                        <button
                            onClick={handleDelete}
                            className="btn btn-outline btn-error">
                            Delete
                        </button>
                        <Link href={`/eventDetail/${_id}`}><button className='btn btn-outline btn-success'>View Details</button></Link>
                        {/* <button className="btn btn-outline btn-success">Invite</button>
                        <button className="btn btn-outline btn-warning">Update</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;