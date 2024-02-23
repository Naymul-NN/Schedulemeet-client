"use client";

import useEvent from "../../hooks/useEvent";
import Image from "next/image";
import Link from "next/link";
import InviteModal from "./Modals/InviteModal";
import AdModal from "./Modals/AdModal";
import useCheckIfAdvertised from "@/components/hooks/useCheckIfAdvertised";

const EventDetail = ({ id }) => {
  const { event, eventsLoading } = useEvent(id);
  const { checkLoading, isAdvertised } = useCheckIfAdvertised(id);

  if (eventsLoading || checkLoading) {
    return <p className="">loading</p>;
  }

  console.log(isAdvertised);

  const { title, image, description, _id, date, time, duration, isPublic } =
    event;

  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  return (
    <div className="pt-12 px-3 md:pt-20">
      <div className="max-w-[70%] mx-auto  card md:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={image}
            alt="event-thumbnail"
            width={300}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{title}</h2>
          <p className="text-info">{description}</p>
          <p className="text-secondary">Date: {formattedDate}</p>
          <p className="text-secondary">Time: {time}</p>
          <p className="text-accent">Duration: {duration}</p>
          <div className="card-actions justify-end">
            <Link href={`/dashboard/UpdateEvent/${_id}`}>
              <button className="btn btn-outline btn-warning">Update</button>
            </Link>

            {isPublic && !isAdvertised && (
              <button
                className="btn btn-outline btn-secondary"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }>
                Advertise
              </button>
            )}

            <button
              className="btn btn-outline btn-accent"
              onClick={() => document.getElementById("my_modal_5").showModal()}>
              Invite Users
            </button>

            {/* ad post modal */}
            <AdModal event={event} />

            {/* invite modal */}

            <InviteModal event={event} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
