"use client";

import BlogCard from "@/components/blog/BlogCard";
import TopArticleCard from "@/components/blog/TopArticleCard";
import Title from "@/shared/Title/title";
import React, { useEffect, useState } from "react";
import Layout from "../mainlayout";
import axios from "axios";
import BlogLoading from "@/components/blog/BlogLoading";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState("true");

  //! useEffect to get blogs data
  useEffect(() => {
    setBlogsLoading(true);
    axios
      // .get("https://schedule-meet-server.vercel.app/api/v1/blogs/getblogs")
      .get("http://localhost:5000/api/v1/blogs/getblogs")
      .then((response) => {
        // console.log(response?.data?.result);

        setBlogs(response?.data?.result);

        setBlogsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(blogs);

  // ! show loading page  ,,  untill data come from DB
  if (blogsLoading) {
    return <BlogLoading />;
  }

  return (
    <Layout>
      <div className="blogContainer bg-gray-50 text-gray-950  ">
        <div className="blogWrapper   m-auto py-7  ">
          {/* main blog section starts  */}

          <div className="allBlogs    w-[90%] m-auto  ">
            {/* title starts  */}
            <h1 className="  text-4xl text-center font-semibold pb-3     ">
              Our blogs
            </h1>
            {/* title ends  */}

            {/* blog cards  */}
            <div className="blogCards mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-9 w-[96%] xsm:w-[86%] sm:w-[72%] md:w-full m-auto md:m-0 ">
              {blogs &&
                blogs.map((blog) => (
                  <BlogCard
                    key={blog?._id}
                    blog={blog}
                  />
                ))}
            </div>
            {/* blog cards ends  */}
          </div>

          {/* main blog section ends  */}

          {/*  */}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
