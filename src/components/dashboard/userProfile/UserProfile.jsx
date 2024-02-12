"use client"

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/components/auth/Authprovider.jsx";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import "../userAnimation.css"








const UserProfile = () => {
  
const homeRouters = useRouter();
const {logOut, user} = useContext(AuthContext)
const [showUpdate, setShowUpdate] = useState(null);
const [userData, setData] = useState(null)
console.log(userData)
useEffect(() => {

fetch('http://localhost:5000/updateuser/alluser')
.then(res => res.json())
.then(data => {
  setData(data)
})

}, [])



const logOuters = () => {
try {
 logOut();
 homeRouters.push("/")
    toast.success('Sign out successful');
      
  } catch (error) {
    console.error('Logout failed:', error);
    toast.error('Sign out failed. Please try again.');
  }


}





const updatedInfo = (e) =>  {

e.preventDefault();
const form = e.target;

const FullNames = form.name.value;
const userNames = form.username.value;
const userEmails = form.useremail.value;
const userAbout = form.userAbout.value;


const facebookLinks = form.facebookLink.value;
const twitterLinks = form.twitterLink.value;
const linkdinLinks = form.linkdinLink.value;
const pinterestLinks = form.pinterestLink.value;

const streets = form.street.value;
const citys = form.city.value;
const states = form.state.value;
const zipCodes = form.zipCode.value;
const countrys = form.country.value;

const userUpdatedInformation = {
  name: FullNames,
  username: userNames,
  useremail: userEmails,
  userimage:  userData.userimage ? userData.userimage : "https://ibb.co/vwVSwMz",
  useraddress: {
    street: streets,
    city: citys,
    state: states,
    zipcode: zipCodes,
    country: countrys,
  },
  userabout: userAbout,
  sociallinks: {
    twitter: twitterLinks,
    facebook: facebookLinks,
    linkedin: linkdinLinks,
    pinterest: pinterestLinks

  },
 userRating: {comment: "nice....", ratings: [1, 2, 3]},
}


fetch('http://localhost:5000/updateuser/updatecreate', {
  method: "PUT",
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': true},
  body: JSON.stringify(userUpdatedInformation)
})
.then(res => res.json())
.then(d => {
  console.log(d)
})





}






  return (
    
 <div className="relative">

    <div className="relative top-0 p-3">


<div className="flex gap-4 w-full xl:flex-row lg:flex-row md:flex-col flex-col">

        {/* profile left section starts  */}
        <div className="xl:w-[60%] lg:w-[60%] w-[100%]">
          {/* profile left top starts  */}
          <div className="border-[1px] rounded-md p-4 h-max shadow-md  mb-6 -z-[1] bg-gray-100">
            <div>
              <Image
                className="rounded-full w-[100px] h-[100px] block mx-auto object-cover border-2 border-black  "
                src={userData?.userimage}
                width={500}
                height={500}
                alt="Profile Image" />

              <div className="flex relative justify-center items-center gap-2 my-3 border border-gray-400 rounded-md w-[130px] p-4 h-max mx-auto text-sm lg:text-base  ">
                <div className="  bg-orange-500 absolute left-0 bottom-0 rounded-l-md top-0 text-white h-full px-2">
                  <div className="flex justify-center items-center w-full h-full">
                    <h2>Start {userData?.userRating?.ratings?.length}</h2>
                  </div>
                </div>

                <div className="flex justify-center items-center h-full absolute right-0 top-0 text-orange-500 text-[20px]">
                  {userData?.userRating?.ratings?.map((d, index) => {
                    return (
                      <div key={index}>
                        <IoMdStarOutline></IoMdStarOutline>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-center">{userData?.username}</h2>
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
              {userData?.userabout}
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
            <button onClick={logOuters} className="px-4 w-max mx-auto block py-2 font-semibold text-white bg-[#4A69BD] hover:bg-[#4d6fcb]  rounded-md">Log Out</button>
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
                <span className="font-bold">Name:</span> {user?.displayName ? user?.displayName : userData?.username
}
              </h2>
              <h2>
                <span className="font-bold">Email:</span> {user?.email ? user?.email : userData?.useremail}
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
                  {userData?.useraddress?.street ? userData?.useraddress?.street : "23 mou2"}
                </h2>
              </div>

              <div className="flex justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  City
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData?.useraddress?.city ? userData?.useraddress?.city : "dhaka"}
                </h2>
              </div>

              <div className="flex justify-center md:justify-start">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  State
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData?.useraddress?.state ? userData?.useraddress?.state : "gazipur"}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  Zip Code
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData?.useraddress?.zipcode ? userData?.useraddress?.zipcode : "2302"}
                </h2>
              </div>

              <div className="flex  justify-center md:justify-start  ">
                <h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold border-gray-300">
                  Country
                </h2>
                <h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md border-gray-300">
                  {userData?.useraddress?.country ? userData?.useraddress?.country : "Bangladesh"}
                </h2>
              </div>
            </div>
          </div>

     <div className="flex z-0">
    <button onClick={() =>  setShowUpdate(true)} className="w-max my-2 z-40 rounded-md hover:bg-[#4e73da] cursor-pointer block mx-auto bg-[#4A69BD] px-4 py-2 text-white">Edit Profile</button>
    <Link href="/writeblog" className="w-max my-2 z-40 rounded-md hover:bg-[#4e73da] cursor-pointer block mx-auto bg-[#4A69BD] px-4 py-2 text-white">Write a blog</Link>
    </div>
  
        </div>
        {/* profile right section ends  */}

      </div>

    
    
{/* Updated Profile start...... */}



    {/* Updated Profile end */}




 <div className={`h-max w-[50%] ${showUpdate == null ? "hidden" : "block"} left-[25%] absolute transition-shadow  ${showUpdate ? "userAnimation top-[10%] opacity-100" : "top-[-200%] userAnimation2" } right-[25%] bg-[#fff] border-[1px] border-[#0000003d] z-50 py-10 shadow-lg p-4 rounded-md`}>  <h2 className="text-center font-bold">Update Your Profile</h2>
<form onSubmit={updatedInfo}>
<div className="p-4 space-y-5">


<div className="flex flex-wrap gap-2">
<div>
<input defaultValue={userData?.username ? userData?.username : "Write Your Full Name..."} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="username" placeholder="Enter your username..." />
</div>


<div>
<textarea className="border-[1px] border-[#0000003d] rounded-md p-4 outline-none" name="userAbout" defaultValue={userData?.userabout ? userData?.userabout : "write here"} cols="30" rows="0"></textarea>
</div>

</div>



<div>
  <h2 className="font-bold my-4">Social Link</h2>
<div className="flex flex-wrap gap-2">
<input defaultValue={userData?.sociallinks?.pinterest ? userData?.sociallinks?.facebook : "example.com"} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="facebookLink" placeholder="Write your facebook link..." />
<input defaultValue={userData?.sociallinks?.pinterest ? userData?.sociallinks?.twitter : "example.com"} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="twitterLink" placeholder="Write your twitter link..." />
<input defaultValue={userData?.sociallinks?.pinterest ? userData?.sociallinks?.linkedin : "example.com"} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="linkdinLink" placeholder="Write your linkdin link..." />
<input defaultValue={userData?.sociallinks?.pinterest ? userData?.sociallinks?.pinterest : "example.com"} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="pinterestLink" placeholder="Write your pinterest link..." />
</div>
</div>

<div>

  <h2 className="font-bold my-4">Personal Details</h2>
  <div className="flex flex-wrap gap-2">


<input defaultValue={user?.displayName ? user?.displayName : userData?.useremail} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="name" placeholder="Write your Name..." />

<input defaultValue={user?.email ? user?.email : userData?.useremail}  className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="email" name="useremail" placeholder="Enter your email..." />
</div>
  </div>

<div>

  <h2 className="font-bold my-4">User Address</h2>
<div className="flex flex-wrap gap-2">
<input defaultValue={userData?.useraddress?.street}  className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="street" placeholder="Write Your Street..." />

<input defaultValue={userData?.useraddress?.city} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="city" placeholder="Write Your City..." />

<input defaultValue={userData?.useraddress?.state } className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="state" placeholder="Write Your State..." />

<input defaultValue={userData?.useraddress?.zipcode } className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="zipCode" placeholder="Write Your Zip code..." />

<input defaultValue={userData?.useraddress?.country} className="border-[1px] border-[#0000003d] rounded-md px-4 py-2 outline-none" type="text" name="country" placeholder="Write Your Country..." />
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
  
</div>

  );

};

export default UserProfile;
