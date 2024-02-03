import React from "react";

const BlogLoading = () => {
  return (
    <div className="blogLoadingContainer bg-red-500 h-screen w-full ">
      <div className=" w-full h-full flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 py-3 text-4xl font-semibold leading-none text-center text-blue-800 bg-blue-200 rounded-md animate-pulse dark:bg-blue-900 dark:text-blue-200">
          ScheduleMeet
        </div>
      </div>
    </div>
  );
};

export default BlogLoading;
