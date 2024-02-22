"use client";

import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import Link from "next/link";

const EventCard = ({ event }) => {
  const { title, image, isPremium, fee, date, _id } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  return (
    <Link href={`/events/details/${_id}`}>
      <div className="card bg-neutral cursor-pointer px-4 py-5 space-y-3 flex flex-col items-center justify-center">
        <Image
          alt={title}
          src={image}
          width={300}
          height={220}
          className="rounded-sm"
        />

        <h2 className="text-primary font-bold text-2xl text-center ">
          {title}
        </h2>

        <div className="flex justify-around items-center gap-10">
          <h3 className="text-secondary text-xl">
            <MdAttachMoney className="inline text-2xl mx-1" />
            {isPremium ? fee : "free"}
          </h3>
          <h3 className="text-secondary-content text-xl">
            <CiCalendarDate className="inline text-2xl" />
            {formattedDate}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
