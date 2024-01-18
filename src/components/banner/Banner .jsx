'use client'
import Image from "next/image";
import bannerImg from "../../../public/images/banner2.png"
import Marquee from "react-fast-marquee";
import Meeting from './banner-animation.json';
import Lottie from 'lottie-react';


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 ">
                <div className="flex flex-col justify-center min-h-screen ">
                    <h2 className="text-xl md:text-3xl font-medium text-gray-400">Automate Interview Scheduling</h2>
                    <h2 className="text-4xl md:text-6xl my-8 font-semibold">Hire faster with 24/7 Automated Interview Scheduling</h2>
                    <p className="text-lg font-medium text-gray-400">Leverage automation to automatically fill recruiter calendars, eliminating unnecessary back-and-forth “sorry I missed yous” and additional third-party apps.</p>
                    <button className="btn w-[150px] mt-5">Get Started</button>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
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