"use client"
import { useContext } from "react";
import logo from "../../assets/logo/write.png";
import Image from "next/image";
import { AuthContext } from "../auth/Authprovider";

const WriteBlog = () => {
const {user} = useContext(AuthContext)

// console.log(user)

const wirteBlogs = (e) => {
e.preventDefault();

const form = e.target;
const blogUserName = form.name.value;
const blogTitle = form.title.value;
const blogImage = form.blogImage.value;
const blogMessage = form.message.value;
const blogOption = form.postOptions.value;


const dateData = new Date();
const months = dateData.getMonth();
const seconds = dateData.getSeconds();
const minutes = dateData.getMinutes();
const dates = dateData.getDate();

form.reset();
const blogTime = {
    months,
    seconds,
    minutes,
    dates
}

const blogData = {
    blogUserName,
    blogTitle,  
    blogMessage,
      blogUserEmail: user.email, 
      blogImage,
    blogUserImage: user.photoURL ? user.photoURL : "https://i.ibb.co/3Sr3XPz/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
    blogCategorys: blogOption,
    blogTime
    
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




}



    return (
        <div className="hero min-h-screen  bg-blue-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <Image
            src={logo}
            alt=""
            className="  rounded-xl "
            width={1000}
            height={700}
          />
                </div>
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 ">
                    <form className="card-body " onSubmit={wirteBlogs}>
                     <div className="space-y-4">
                     <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered  text-black" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered text-black" required />                          
                        </div>
                    

                      <div className="form-control text-black">
                      <label className="label">
                     <span className="text-xl text-black">Option</span>
                    </label>
                           
                           <select name="postOptions" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>You Choose One</option>
                                  <option value="Business Tips">Business Tips</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Meetings">Meetings</option>
                                <option value="Press">Press</option>
                                <option value="Productivity">Productivity</option>
                                <option value="Sales">Sales</option>
                                <option value="Schedule">Schedule</option>
                                <option value="Startup">Startup</option>
                                <option value="Management">Management</option>
                           </select>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Image</span>
                            </label>
                            <input type="text" name="blogImage" placeholder="image" className="input input-bordered text-black" required />                          
                        </div>


                        
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Description</span>
                            </label>
                            <textarea name="message" placeholder="Write here........" className="textarea textarea-bordered textarea-lg w-full max-w-xl text-black" ></textarea>                         
                        </div>
                       
                     </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Publish</button>
                        </div>
            
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteBlog;










// const WriteBlog = () => {
//     return (
//         <div className=' bg-blue-300'>
//             <h1 className='py-5 text-3xl'> You can share your thought about interview and time management </h1>
//               <form action="https://formspree.io/f/mknldkbb" method="POST">
//                     <div className="py-5 ">
//                         <label>
//                             <input className="border w-full lg:w-[60%]" type="text" name="name" placeholder="type your name" />
//                         </label>
//                     </div>
//                     <div className='mb-5'>
//                         <label>
//                             <input className="border w-full lg:w-[60%]" type="email" name="email" placeholder="Provide the title" />
//                         </label>
//                     </div>
//                     <div>
//                         <label>
//                             <input className="border w-full lg:w-[60%]" type="email" name="email" placeholder="upload a igage" />
//                         </label>
//                     </div>
//                     <div className="pt-10 pb-7">
//                         <label>
//                             <textarea className="border w-full lg:w-[60%] h-44 text-white placeholder-green-500 bg-indigo-950" name="message" placeholder="Write here........" />
//                         </label>
//                     </div>
//                     <button className="btn bg-slate-400 hover:bg-orange-400" type="submit">publish</button>
//                 </form>
//         </div>
//     );
// };

// export default WriteBlog;