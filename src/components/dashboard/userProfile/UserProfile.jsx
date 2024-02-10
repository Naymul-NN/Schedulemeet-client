"use client";

import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "../userAnimation.css";
import useUserByEmail from "@/components/hooks/useUserByEmail";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import UpdateForm from "./UpdateForm/UpdateForm";
import LoadingPage from "@/components/loadingPage/LoadingPage";
import useAuth from "@/components/hooks/useAuth";
import Link from "next/link";

const UserProfile = () => {
  const homeRouters = useRouter();
  const { logOut } = useAuth();
  const [showUpdate, setShowUpdate] = useState(false);

  const { user, userLoading } = useUserByEmail();

  if (userLoading) {
    return <LoadingPage />;
  }

  const logOuters = () => {
    try {
      logOut();
      homeRouters.push("/");
      toast.success("Sign out successful");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Sign out failed. Please try again.");
    }
  };

  return (
    <div className="relative">
      <div className="relative top-0 p-3">
        <div className="flex gap-4 w-full xl:flex-row lg:flex-row md:flex-col flex-col">
          {/* profile left section starts  */}
          <div className="xl:w-[60%] lg:w-[60%] md:w-[60%] w-[100%]">
            {/* profile left top starts  */}
            <div className="border-[1px] rounded-md p-4 h-max shadow-md  mb-6 -z-[1] bg-gray-100">
              <div>
                <Image
                  className="rounded-full w-[100px] h-[100px] block mx-auto object-cover border-2 border-black  "
                  src={user?.img || "https://i.ibb.co/g3H9Djn/avatar.jpg"}
                  width={500}
                  height={500}
                  alt="Profile Image"
                />

                {/* <div className="flex relative justify-center items-center gap-2 my-3 border border-gray-400 rounded-md w-[130px] p-4 h-max mx-auto text-sm lg:text-base  ">
                  <div className="  bg-orange-500 absolute left-0 bottom-0 rounded-l-md top-0 text-white h-full px-2">
                    <div className="flex justify-center items-center w-full h-full">
                      <h2>Start {userData?.userRating?.ratings?.length}</h2>
                    </div>
                  </div> */}
              </div>
              <div>
                <h2 className="text-center">{user?.name}</h2>
              </div>
            </div>
          </div>
          {/* profile left top ends  */}

          {/* profile left middle starts  */}
          <div className=" bg-gray-100  profileMiddleSection border-[1px] rounded-md p-3 h-max shadow-md mb-6">
            <div className="flex gap-1 items-center">
              <FcAbout className="text-[18px]"></FcAbout>{" "}
              <h2 className="text-left font-bold text-[1rem] flex gap-1 items-center">
                About
              </h2>
            </div>

            <p className="p-2 text-base sm:text-sm lg:text-base ">
              {user?.about}
            </p>
          </div>
          {/* profile left middle ends  */}

          {/* profile left bottom starts  */}
          <div className=" bg-gray-100  profileLeftBottom border-[1px] rounded-md p-4 h-max shadow-md my-2">
            <h2 className="text-center font-medium  text-[1.3rem] sm:text-[1rem] lg:text-[1.2rem]">
              Social Link
            </h2>

            <div className="flex gap-4 justify-center my-3">
              <Link href="">
                {" "}
                <FaFacebook className="text-[20px] text-blue-600"></FaFacebook>{" "}
              </Link>
              <Link href="">
                {" "}
                <AiFillTwitterCircle className="text-[20px] text-[#4DA6E9]"></AiFillTwitterCircle>{" "}
              </Link>
              <Link href="">
                {" "}
                <FaLinkedin className="text-[20px] text-[#007AB5]"></FaLinkedin>{" "}
              </Link>
              <Link href="">
                {" "}
                <FaPinterest className="text-[20px] text-[#B7081B]"></FaPinterest>{" "}
              </Link>
            </div>
          </div>

          <div>
            <button
              onClick={logOuters}
              className="px-4 w-max mx-auto block py-2 font-semibold text-white bg-[#4A69BD] hover:bg-[#4d6fcb]  rounded-md">
              Log Out
            </button>
          </div>
          {/* profile left bottom ends  */}
        </div>
        {/* profile left section ends  */}

        {/* profile right section starts  */}
        <div className="w-full z-0 profileRightSection border-[1px] rounded-md h-max shadow-md bg-gray-100 ">
          <div className="bg-[#4A69BD] rounded-tr-md  rounded-tl-md text-white">
            <h2 className="text-[20px] p-2 text-center">Personal Details</h2>
          </div>
          <div className="p-4">
            <div>
              <h2>
                <span className="font-bold">Name:</span> {user?.name}
              </h2>
              <h2>
                <span className="font-bold">Email:</span> {user?.email}
              </h2>
            </div>
          </div>

          <div className="my-6">
            <div>
              <h2 className="text-center mb-4 bg-[#4A69BD] cursor-pointer text-white py-2 px-4 w-max mx-auto rounded-md">
                User Address
              </h2>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 w-full">
              <div className="flex justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  City
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {user?.city || "City"}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start  ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  Country
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {user?.country || "Country"}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex z-0">
            <button
              onClick={() => setShowUpdate(true)}
              className="w-max my-2 z-40 rounded-md hover:bg-[#4e73da] cursor-pointer block mx-auto bg-[#4A69BD] px-4 py-2 text-white">
              Edit Profile
            </button>
            <Link
              href="/writeblog"
              className="w-max my-2 z-40 rounded-md hover:bg-[#4e73da] cursor-pointer block mx-auto bg-[#4A69BD] px-4 py-2 text-white">
              Write a blog
            </Link>
          </div>
        </div>
        {/* profile right section ends  */}
      </div>

      {/* Updated Profile start...... */}
      <UpdateForm
        setShowUpdate={setShowUpdate}
        showUpdate={showUpdate}
        user={user}
      />
      {/* Updated Profile end */}
    </div>
  );
};

export default UserProfile;
