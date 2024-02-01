"use client";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "@/components/auth/Authprovider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const userData = {
  name: "Jhon Doe",
  username: "jhonDoe434",
  useremail: "jhondoe33@gmail.com",
  userimage: "https://i.ibb.co/dLHg6dD/download.jpg",
  useraddress: {
    street: "123 Main St",
    city: "Cityville",
    state: "State",
    zipcode: "12345",
    country: "USA",
  },
  userabout:
    "A brief description about the user goes here. A brief description about the user goes here. A brief description about the user goes here. Thank you",
  sociallinks: {
    twitter: "https://twitter.com/jhonDoe434",
    facebook: "https://www.facebook.com/jhonDoe434",
    instagram: "https://www.instagram.com/jhonDoe434",
  },
  userRating: [1, 2, 3],
};

const UserProfile = () => {
  const homeRouters = useRouter();
  const { logOut } = useContext(AuthContext);

  const logOuters = () => {
    try {
      logOut();
      toast.success("Sign out successful");
      homeRouters.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Sign out failed. Please try again.");
    }
  };

  return (
    <div className="   h-full  userProfileContainer flex justify-center items-center p-3  ">
      <div className=" userProfileWrapper flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 gap-x-3  lg:gap-x-4   ">
        {/* profile left section starts  */}
        <div className=" profileLeftSection w-[90%] xsm:w-[80%] sm:w-[50%] m-auto sm:m-0 ">
          {/* profile left top starts  */}
          <div className=" profileLefftTopSection border-[1px] rounded-md p-4 h-max shadow-md  mb-6 -z-[1] bg-gray-100  ">
            <div>
              <Image
                className="rounded-full w-[4.5rem] h-[4.5rem] xmd:w-[5.5rem] xmd:h-[5.5rem] lg:w-[7rem] lg:h-[7rem] block mx-auto  object-cover border-2 border-black  "
                src={userData.userimage}
                width={500}
                height={500}
                alt="Profile Image"
              />

              <div className="  z-[1]  flex relative justify-center items-center gap-2 my-3 border border-gray-400 rounded-md w-[130px] p-4 h-max mx-auto text-sm lg:text-base  ">
                <div className="  bg-orange-500 absolute left-0 bottom-0 rounded-l-md top-0 text-white h-full px-2">
                  <div className="flex justify-center items-center w-full h-full">
                    <h2>Start {userData.userRating.length}</h2>
                  </div>
                </div>

                <div className="flex justify-center items-center h-full absolute right-0 top-0 text-orange-500 text-[20px]">
                  {userData.userRating.map((d, index) => {
                    return (
                      <div key={index}>
                        <IoMdStarOutline></IoMdStarOutline>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-center">{userData.username}</h2>
              </div>
            </div>
          </div>
          {/* profile left top ends  */}

          {/* profile left middle starts  */}
          <div className=" bg-gray-100  profileMiddleSection border-[1px] rounded-md p-3 lg:p-4 h-max shadow-md mb-6  ">
            <div className="flex gap-1 items-center">
              <FcAbout className="text-[18px]"></FcAbout>{" "}
              <h2 className="text-left font-bold text-[1rem] flex gap-1 items-center text-lg sm:text-base lg:text-lg ">
                About
              </h2>
            </div>

            <p className="p-2 text-base sm:text-sm lg:text-base ">
              {userData.userabout}
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
          {/* profile left bottom ends  */}

          <div>
            <button
              onClick={logOuters}
              className="text-center block mx-auto my-4 bg-[#4A69BD] hover:bg-[#577ce1] cursor-pointer text-white py-2 px-5 w-max  rounded-md">
              Log Out
            </button>
          </div>
        </div>

        {/* profile right section starts  */}
        <div className=" w-[94%] xsm:w-[85%] sm:w-[100%] m-auto profileRightSection  border-[1px] rounded-md h-max  shadow-md bg-gray-100 ">
          <div className="bg-[#4A69BD] rounded-tr-md  rounded-tl-md text-white">
            <h2 className="text-[20px] p-2 text-center">Personal Details</h2>
          </div>
          <div className="p-4">
            <div>
              <h2>
                <span className="font-bold">Name:</span> {userData.name}
              </h2>
              <h2>
                <span className="font-bold">Email:</span> {userData.useremail}
              </h2>
            </div>
          </div>

          <div className=" my-6 ">
            <div>
              <h2 className="text-center mb-4 bg-[#4A69BD] hover:bg-blue-700 cursor-pointer text-white py-2 px-4 w-max mx-auto rounded-md">
                User Address
              </h2>
            </div>

            <div className="    p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 w-full">
              <div className="flex  justify-center md:justify-start  ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300 ">
                  #Street
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.street}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  City
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.city}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  State
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.state}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  Zip Code
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.zipcode}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start  ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  Country
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.country}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center my-2 bg-[#4A69BD] hover:bg-[#577ce1] cursor-pointer text-white py-2 px-5 w-max mx-auto rounded-md">
              Edit Profile
            </h2>
          </div>
        </div>
        {/* profile right section ends  */}
      </div>
    </div>
  );
};

export default UserProfile;
