import React from 'react';
import useMeetings from '../hooks/useMeetings';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MeetingCard = ({ meeting, index }) => {

    const { _id, meetingTitle, hostEmail, date } = meeting;
    const { refetch } = useMeetings();
    const axiosSecure = useAxiosSecure();

    //   there will be a modal to confirm the delete
    const handleDelete = async () => {
        const res = await axiosSecure.delete(
            `/api/v1/meetings/deleteMeeting/${_id}`
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
                    <h2 className="card-title">{meetingTitle}</h2>
                    <p>{date}</p>
                    <p>One on one</p>
                    <div className="card-actions justify-between">
                        <button
                            onClick={handleDelete}
                            className="btn btn-outline btn-error">
                            Delete
                        </button>
                        <button className="btn btn-outline btn-success">Invite</button>
                        <button className="btn btn-outline btn-warning">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingCard;