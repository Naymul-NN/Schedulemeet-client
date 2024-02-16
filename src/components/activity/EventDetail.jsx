'use client'
import React, { useState } from 'react';
import useEvent from '../hooks/useEvent';
import Image from 'next/image';
import Link from 'next/link';

const EventDetail = ({ id }) => {

    const { event, eventsLoading } = useEvent(id);
    console.log(event)

    if (eventsLoading) {
        return <p className="">loading</p>;
    }

    // const [eventData, setEventData] = useState(event)
    const eventData = event;
    // const { description, duration, eventTitle, image, time} = eventData;
    // console.log(eventData);

    return (
        <div className='pt-12 md:pt-20'>
            <div className="max-w-[70%] mx-auto  card md:card-side bg-base-100 shadow-xl">
                <figure><Image src={eventData.image} alt='event-thumbnail' width={300} height={300}></Image></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{eventData.eventTitle}</h2>
                    <p className='text-black'>{eventData.description}</p>
                    <p className='text-black'>Date: {eventData.date}</p>
                    <p className='text-black'>Time: {eventData.time}</p>
                    <p className='text-black'>Duration: {eventData.duration}</p>
                    <div className="card-actions justify-end">
                        <Link href={""}><button className='btn btn-outline'>Invite</button></Link>
                        <Link href={`/eventUpdate/${eventData._id}`}><button className='btn btn-outline'>Update</button></Link>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_4').showModal()}>Advertise</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box ">
                                <h3 className="font-bold text-lg text-black">Advertise</h3>
                                <p className="py-4 text-black">Make your payment</p>
                                <button className='btn btn-primary'>Payment</button>
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