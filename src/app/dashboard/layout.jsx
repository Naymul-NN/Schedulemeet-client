"use client";

import Link from "next/link";
import "../../app/dashboard/navbar.css";
import { AiOutlineProfile } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { GrHistory, GrSchedulePlay } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <div className="w-[100%] mx-auto flex justify-end relative bg-gray-50 ">
      <div
        className={` h-screen fixed top-0 ${
          isSidebarActive ? " left-[0] " : " left-[-100%] "
        }  md:left-0  px-4 xmd:px-5  bg-[#4a69bd] border-r-[1px] shadow-md text-white duration-200 z-[20] `}>
        <header>
          <h1 className="py-3 text-center ">Dashboard Header</h1>
        </header>
        <nav>
          <ul className="navbarsStyles px-4   ">
            <li>
              <Link
                onClick={() => setIsSidebarActive(!isSidebarActive)}
                href="/dashboard"
                className="hover:bg-red-500">
                {" "}
                <FiActivity className="inline-flex mb-1 text-lg xmd:text-xl" />{" "}
                Activity
              </Link>
            </li>
            <li className="py-3 ">
              <Link
                href="/dashboard/profile"
                onClick={() => setIsSidebarActive(!isSidebarActive)}>
                {" "}
                <AiOutlineProfile className="inline-flex mb-1 text-lg xmd:text-xl " />{" "}
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/setupinterview"
                onClick={() => setIsSidebarActive(!isSidebarActive)}>
                {" "}
                <GrSchedulePlay className="inline-flex mb-1 text-lg xmd:text-xl" />{" "}
                Setup Interview
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/dashboard/setupevents"
                onClick={() => setIsSidebarActive(!isSidebarActive)}>
                {" "}
                <GrSchedulePlay className="inline-flex mb-1 text-lg xmd:text-xl" />{" "}
                Setup Events
              </Link>
            </li>
            <li className="pb-3">
              <Link
                href="/dashboard/history"
                onClick={() => setIsSidebarActive(!isSidebarActive)}>
                {" "}
                <GrHistory className="inline-flex mb-1 text-lg xmd:text-xl" />{" "}
                History
              </Link>
            </li>
            <hr className="mr-10" />
            <li className="pt-4">
              <Link
                href="/"
                onClick={() => setIsSidebarActive(!isSidebarActive)}>
                {" "}
                <IoHomeOutline className="inline-flex mb-1 text-lg xmd:text-xl" />{" "}
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* hamburger menu */}
      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-gray-500 p-2 rounded cursor-pointer z-[20] ">
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "-rotate-45 translate-y-[13px]" : ""
          }`}></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "opacity-0" : ""
          }`}></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "rotate-45 translate-y-[-13px]" : ""
          }`}></div>
      </div>
      {/* hamburger emnu ends  */}
      {/* hamburger emnu ends  */}

      {/* <div className="  w-full md:w-[calc(100%-14rem)] xmd:w-[calc(100%-15rem)]    p-3 xmd:p-4  text-black  "> */}
      <div className="  w-full md:w-[calc(100%-14rem)] xmd:w-[calc(100%-15rem)]    text-black  ">
        {children}
      </div>


      
    </div>
  );
};

export default DashboardLayout;
