"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import BlogLoading from "@/components/blog/BlogLoading";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaRegPenToSquare } from "react-icons/fa6";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const pathname = usePathname()

  useEffect(() => {
    setBlogsLoading(true)
    fetch("http://localhost:5000/api/v1/blogs/getblogs", {
        credentials: 'include' // Adding 'credentials: include' for sending credentials like cookies
    })
    .then(res => res.json()) // Correcting the arrow function syntax
    .then(data => {
        setBlogs(data);
         setBlogsLoading(false) // Assuming setBlogs is a state updater function
    })
}, []);



  


  return (
    <div>

{
  blogsLoading ? <BlogLoading></BlogLoading> : <div className="blogContainer bg-gray-50 text-gray-950  min-h-screen">

  <div className=" bg-[#e3e3e3] w-full h-full">
   <div className="mx-[100px] p-2 flex justify-between">
  <h2>{pathname}</h2>
  <Link href="/writeblog" className="flex justify-center items-center gap-1"> <FaRegPenToSquare />
 write</Link>
</div> 
  </div>
        <div className="blogWrapper   m-auto pt-6  ">
       
          <div className="allBlogs   py-3 w-[90%] m-auto  ">
            <div className="blogCards mt-4  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-9  ">
              {blogs &&
                blogs.map((blog) => (
                  <BlogCard
                    key={blog?._id}
                    blog={blog}
                  />
                ))}
            </div>
           
          </div>

       


        </div>
      </div>
}


    </div>
  );
};

export default Blogs;
