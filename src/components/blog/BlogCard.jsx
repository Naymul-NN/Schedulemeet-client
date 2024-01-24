import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-gray-100 hover:bg-gray-200 group cursor-pointer shadow-md  ">
        <div className=" imageContainer  relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-700 active:text-indigo-800">
              Working with legacy stacks
            </a>
          </h2>

          <p className="mb-6 text-gray-700">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <div className="readmoreBtn flex items-center gap-x-1 text-indigo-700 ">
            <p className=" text-lg font-semibold  ">Read more</p>

            <FaArrowRightLong className=" text-lg group-hover:translate-x-1 transition-all duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
