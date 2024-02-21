"use client";

import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

const EventCard = ({ event }) => {
  const { title, image, isPremium, fee, date } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-UK");

  return (
    <div className="card bg-neutral px-4 py-5 space-y-3 flex flex-col items-center justify-center">
      <Image
        alt={title}
        src={image}
        width={300}
        height={220}
        className="rounded-sm"
      />

      <h2 className="text-primary font-bold text-2xl text-center ">{title}</h2>

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
  );
};

export default EventCard;
