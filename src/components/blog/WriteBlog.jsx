
import logo from "../../assets/logo/page.png";
import Image from "next/image";

const WriteBlog = () => {
    return (
        <div className="hero  bg-blue-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <Image
            src={logo}
            alt=""
            className="  rounded-xl "
            width={600}
            height={550}
          />
                </div>
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-pink-100">
                    <form className="card-body">
                     <div>
                     <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered  text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Title</span>
                            </label>
                            <input type="text" placeholder="title" className="input input-bordered text-black" required />                          
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Image</span>
                            </label>
                            <input type="text" placeholder="image" className="input input-bordered text-black" required />                          
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-black">Description</span>
                            </label>
                            <textarea placeholder="Write here........" className="textarea textarea-bordered textarea-lg w-full max-w-xl text-black" ></textarea>                         
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










// import React from 'react';

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