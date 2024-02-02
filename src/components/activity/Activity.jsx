'use client'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import TitleDashboard from '@/shared/TitleDashboard/TitleDashboard';

const Activity = () => {

    const [interviews, setInterviews] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('https://schedule-meet-server.vercel.app/api/v1/meetings/getMeetings')
            .then((res) => {
                console.log(res.data.meetings);
                setInterviews(res?.data?.meetings);
            })
            .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        axios.get('https://schedule-meet-server.vercel.app/api/v1/events/getEvents')
            .then((res) => {
                console.log(res.data.meetings);
                setEvents(res?.data?.events);
            })
            .catch((error) => console.log(error));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://schedule-meet-server.vercel.app/api/v1/meetings/deleteMeeting/${id}`)
        .then(res => {
            console.log("deleted", id);
        })
        .catch((error) => console.log(error));
    }

    const handleUpdate = (id) => {
        console.log("updated", id);
    }

    const handleInvite = (id) => {
        console.log("invited", id);
    }

    return (
        <div>
            {/*-------------Total scheduled interview data-------------*/}
            <TitleDashboard title={"Scheduled Meetings"} ></TitleDashboard>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Host Email</th>
                                <th>Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>Invite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                    interviews.map((interview, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{interview.meetingTitle}</td>
                                        <td>{interview.hostEmail}</td>
                                        <td>{interview.date}</td>
                                        <td><button onClick={() => handleDelete(interview._id)} className='btn btn-outline btn-error'>Delete</button></td>
                                        <td><button onClick={() => handleUpdate(interview._id)} className='btn btn-outline btn-warning'>Update</button></td>
                                        <td><button onClick={() => handleInvite(interview._id)} className='btn btn-outline btn-success'>Invite</button></td>
                                    </tr>)
                                }
                            
                        </tbody>
                    </table>
                </div>
            </div>

            {/*-------------Total scheduled events data--------------*/}
            <TitleDashboard title={"Scheduled Events"} ></TitleDashboard>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Host Email</th>
                                <th>Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>Invite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                    events.map((event, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{event.eventTitle}</td>
                                        <td>{event.hostEmail}</td>
                                        <td>{event.date}</td>
                                        <td><button onClick={() => handleDelete(event._id)} className='btn btn-outline btn-error'>Delete</button></td>
                                        <td><button onClick={() => handleUpdate(event._id)} className='btn btn-outline btn-warning'>Update</button></td>
                                        <td><button onClick={() => handleInvite(event._id)} className='btn btn-outline btn-success'>Invite</button></td>
                                    </tr>)
                                }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Activity;