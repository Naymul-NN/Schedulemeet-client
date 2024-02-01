import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";
<<<<<<< HEAD
import { useContext, useState } from "react";
import { AuthContext } from "@/components/auth/Authprovider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

=======
>>>>>>> 76c092959c9ecae3c5cbc6029047b3a8662b4891

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
    linkedin: "https://www.instagram.com/jhonDoe434",
    pinterest: "https://www.instagram.com/jhonDoe434"

  },
  userRating: [1, 2, 3],
};

const UserProfile = () => {
<<<<<<< HEAD
const homeRouters = useRouter();
const {logOut, user} = useContext(AuthContext)
const [showUpdate, setShowUpdate] = useState(false)
console.log(user)
const logOuters = () => {

try {
 logOut();
    toast.success('Sign out successful');
      homeRouters.push("/")
  } catch (error) {
    console.error('Logout failed:', error);
    toast.error('Sign out failed. Please try again.');
  }



}



const shower = () => {
  setShowUpdate(true)
}



  return (<div>
    
    <div className="h-full relative  userProfileContainer flex justify-center items-center p-2  ">
      <div className="userProfileWrapper flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 gap-x-1 md:gap-x-2  lg:gap-x-4 ">
=======
  return (
    <div className="   h-full  userProfileContainer flex justify-center items-center p-2  ">
      <div className=" userProfileWrapper flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 gap-x-1 xmd:gap-x-2  lg:gap-x-4   ">
>>>>>>> 76c092959c9ecae3c5cbc6029047b3a8662b4891
        {/* profile left section starts  */}
        <div className=" profileLeftSection w-[90%] xsm:w-[80%] sm:w-[50%] m-auto sm:m-0   ">
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
        </div>
        {/* profile left section ends  */}

        {/* profile right section starts  */}
        <div className=" w-[94%] xsm:w-[85%] sm:w-[100%] m-auto profileRightSection  border-[1px] rounded-md h-max  shadow-md bg-gray-100 ">
          <div className="bg-[#4A69BD] rounded-tr-md  rounded-tl-md text-white">
            <h2 className="text-[20px] p-2 text-center">Personal Details</h2>
          </div>
          <div className="p-4">
            <div>
              <h2>
                <span className="font-bold">Name:</span> {user.displayName}
              </h2>
              <h2>
                <span className="font-bold">Email:</span> {user.email}
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
              <div className="flex  justify-center md:justify-start  ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300 ">
                  #Street
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.street}
                </h2>
              </div>

              <div className="flex justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  City
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData.useraddress.city}
                </h2>
              </div>

              <div className="flex justify-center md:justify-start">
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
    <button onClick={shower} className="w-max my-2 rounded-md hover:bg-[#4e73da] cursor-pointer block mx-auto bg-[#4A69BD] px-4 py-2 text-white">Edit Profile</button>
         </div>

   
  
        </div>
        {/* profile right section ends  */}
      </div>
    </div>
    
    
    
<div className={`h-max ${showUpdate ? 'block' : "hidden"} w-[50%] left-[25%] absolute top-[100px] right-[25%] bg-white z-50 py-10 shadow-md border-[1px] p-4 rounded-md`}>
  <h2 className="text-center font-bold">Updated Profile</h2>
<form>
<div className="p-4 space-y-5">


<div className="flex gap-2">
<div>
<input defaultValue={userData.username ? userData.username : "Write Your Full Name..."} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="username" placeholder="Enter your username..." />
</div>


<div>
<textarea className="border-[1px] rounded-md p-4 outline-none" name="userAbout" defaultValue={userData.userabout ? userData.userabout : "write here" } cols="60" rows="0"></textarea>
</div>

</div>

<div>
  <h2 className="font-bold my-4">Social Link</h2>

<div className="flex flex-wrap gap-2">
<input defaultValue={userData.sociallinks.pinterest ? userData.sociallinks.facebook : "example.com"} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="facebookLink" placeholder="Write your facebook link..." />
<input defaultValue={userData.sociallinks.pinterest ? userData.sociallinks.twitter : "example.com"} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="twitterLink" placeholder="Write your twitter link..." />
<input defaultValue={userData.sociallinks.pinterest ? userData.sociallinks.linkedin : "example.com"} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="linkdinLink" placeholder="Write your linkdin link..." />
<input defaultValue={userData.sociallinks.pinterest ? userData.sociallinks.pinterest : "example.com"} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="pinterestLink" placeholder="Write your pinterest link..." />
</div>
</div>

<div>

  <h2 className="font-bold my-4">Personal Details</h2>
  <div className="flex flex-wrap gap-2">


<input defaultValue={userData.name ? userData.name : "write your name"} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="name" placeholder="Write your Name..." />

<input defaultValue={userData.useremail ? userData.useremail : "write your email..."}  className="border-2 rounded-md px-4 py-2 outline-none" type="email" name="email" placeholder="Enter your email..." />
</div>
  </div>

<div>

  <h2 className="font-bold my-4">User Address</h2>
<div className="flex flex-wrap gap-2">
<input defaultValue={userData.useraddress.street ? userData.useraddress.street : "write your street..."}  className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="street" placeholder="Write Your Street..." />

<input defaultValue={userData.useraddress.city ? userData.useraddress.city : "write your city..."} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="city" placeholder="Write Your City..." />

<input defaultValue={userData.useraddress.state ? userData.useraddress.state : "write your state..."} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="state" placeholder="Write Your State..." />

<input defaultValue={userData.useraddress.zipcode ? userData.useraddress.zipcode : "write your zip code..."} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="zipCode" placeholder="Write Your Zip code..." />

<input defaultValue={userData.useraddress.country ? userData.useraddress.country : "write your country..."} className="border-2 rounded-md px-4 py-2 outline-none" type="text" name="country" placeholder="Write Your Country..." />
</div>
  
</div>

<input className="bg-[#4A69BD] my-2 hover:bg-[#577CE1] font-semibold cursor-pointer text-white px-6 py-2 rounded-md mx-auto block w-max" type="submit" value="Update" />
</div>
</form>
 <div className="flex justify-end">
 <button onClick={() => setShowUpdate(false)} className="bg-red-500 px-2 py-1 text-white rounded-md">Cancel</button> 
 </div>
    </div>


    
    
    </div>
  );
};

export default UserProfile;
