import React from 'react';

const WriteBlog = () => {
    return (
        <div>
            <h1 className='py-5 text-3xl'> You can share your thought about interview and time management </h1>
              <form action="https://formspree.io/f/mknldkbb" method="POST">
                    <div className="py-5 ">
                        <label>
                            <input className="border w-full lg:w-[60%]" type="text" name="name" placeholder="type your name" />
                        </label>
                    </div>
                    <div className='mb-5'>
                        <label>
                            <input className="border w-full lg:w-[60%]" type="email" name="email" placeholder="Provide the title" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="border w-full lg:w-[60%]" type="email" name="email" placeholder="upload a igage" />
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