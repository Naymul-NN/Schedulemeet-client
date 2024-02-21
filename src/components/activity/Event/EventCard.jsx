import React from "react";
import useMeetings from "@/components/hooks/useMeetings";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event }) => {
  const { refetch } = useMeetings();
  const axiosSecure = useAxiosSecure();

  const { _id, title, date, image } = event;

  //   there will be a modal to confirm the delete
  const handleDelete = async () => {
    const res = await axiosSecure.delete(`/api/v1/events/deleteEvent/${_id}`);

    if (res.data.success) {
      toast.success("Deleted Successfully");
      refetch();
    }
  };

  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  return (
    <div>
      <div className="bg-neutral text-primary-content rounded-lg">
        <div className="card-body">
          <Image
            alt={title}
            src={image}
            width={300}
            height={230}
          />
          <h2 className="card-title text-primary-content">{title}</h2>
          <p>{formattedDate}</p>

          <div className="card-actions justify-between">
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error">
              Delete
            </button>
            <Link href={`/eventDetail/${_id}`}>
              <button className="btn btn-outline btn-success">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
