import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  // console.log(blog);

  const { title, titleImg, description, _id } = blog;
  const [detail, setDetail] = useState("");

  //! effect to get descrription
  useEffect(() => {
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = description;
    const paragraphs = tempDiv.querySelectorAll("p");

    let data = "";

    paragraphs.forEach((para) => {
      data += para?.textContent;
    });

    setDetail(data);

    // console.log(data);
  }, [blog]);

  // console.log(detail);

  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-gray-100 hover:bg-gray-200 group cursor-pointer shadow-md  ">
        <div className=" imageContainer  relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src={titleImg}
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link
              href={`/blog/${_id}`}
              className="transition duration-100 hover:text-indigo-700 active:text-indigo-800">
              {title}
            </Link>
          </h2>

          <p className="mb-6 text-gray-700">
            {detail && detail?.length >= 90
              ? detail.slice(0, 90) + "....."
              : detail}
          </p>

          <Link href={`/blog/${_id}`}>
            <div className="readmoreBtn flex items-center gap-x-1 text-indigo-700 ">
              <p className=" text-lg font-semibold  ">Read more</p>

              <FaArrowRightLong className=" text-lg group-hover:translate-x-1 transition-all duration-200 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
