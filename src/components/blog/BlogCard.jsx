import React from "react";

const BlogCard = () => {
  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div className=" imageContainer group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
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
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">
              Working with legacy stacks
            </a>
          </h2>

          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
