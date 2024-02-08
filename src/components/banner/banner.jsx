'use client'
import Image from "next/image";
import bannerImg from "../../../public/images/banner2.png"
import Marquee from "react-fast-marquee";
import Meeting from './banner-animation.json';
import Lottie from 'lottie-react';
import Link from "next/link";


const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="flex-1 ">
                <div className="flex flex-col justify-center min-h-screen ">
                    <h2 className="text-xl md:text-3xl font-semibold text-green-500">Automate Interview Scheduling</h2>
                    <h2 className="text-4xl md:text-6xl mt-8 font-semibold">Effortless Interview Coordination with Schedule<span className="text-green-500">Meet</span></h2>
                    <Marquee className="my-4 text-sm font-bold">
                    Join ScheduleMeet today and unlock a new era of stress-free interview scheduling.
                    </Marquee>
                    <p className="text-lg font-medium text-gray-500">Welcome to ScheduleMeet, where seamless interview scheduling meets efficiency. Elevate your hiring experience with our user-friendly platform designed to simplify the coordination of interviews. Revolutionize your recruitment journey and focus on what matters most – unlock a new era of stress-free interview scheduling!</p>
                  <Link href="/instraction">  <button className="btn w-[150px] my-5 hover:bg-slate-400 btn-warning text-black text-lg font-bold">Get Started</button></Link>
                    
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                {/* <Image src={bannerImg} alt="Banner image" width={500}
                    height={500}></Image> */}
                <Lottie loop={true} animationData={Meeting}></Lottie>
            </div>
        </div>
    );
};

export default Banner;