"use client"

import React, { useContext } from 'react';
import { AuthContext } from '../auth/Authprovider';

const WriteBlog = () => {
const {user} = useContext(AuthContext)

console.log(user)

const wirteBlogs = (e) => {
e.preventDefault();

const form = e.target;
const blogUserName = form.name.value;
const blogTitle = form.title.value;
const blogImage = form.blogImage.value;
const blogMessage = form.message.value;


const blogData = {
    blogUserName,
    blogTitle,
    blogImage,
    blogMessage,
    blogUserEmail: user.email
    
}

fetch("http://localhost:5000/api/v1/blogs/addBlog", {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': true},
    body: JSON.stringify(blogData)
  })
  .then(res => res.json())
  .then(d => {
    console.log(d)
  })


console.log(blogData)


}



    return (
        <div>
            <h1 className='py-5 text-3xl'> You can share your thought about interview and time management </h1>
              <form onSubmit={wirteBlogs} method="POST" className='text-black'>
                    <div className="py-5 ">
                        <label>
                            <input defaultValue={user?.displayName ? user?.displayName : "Write Your Name"} className="border w-full lg:w-[60%]" type="text" name="name" placeholder="type your name" />
                        </label>
                    </div>
                    <div className='mb-5'>
                        <label>
                            <input className="border  w-full lg:w-[60%]" type="text" name="title" placeholder="Provide the title" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="border w-full lg:w-[60%]" type="text" name="blogImage" placeholder="upload a igage" />
                        </label>
                    </div>
                    <div className="pt-10 pb-7">
                        <label>
                            <textarea className="border w-full lg:w-[60%] h-44 text-white placeholder-green-500 bg-indigo-950" name="message" placeholder="Write here........" />
                        </label>
                    </div>
                    <button className="btn bg-slate-400 hover:bg-orange-400" type="submit">publish</button>
                </form>
        </div>
    );
};

export default WriteBlog;