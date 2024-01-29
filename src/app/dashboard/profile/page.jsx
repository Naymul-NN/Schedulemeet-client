import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";

const profile = () => {

const userData =  {
        name: "Jhon Doe",
        username: "jhonDoe434",
        useremail: "jhondoe33@gmail.com",
        userimage: "https://i.ibb.co/dLHg6dD/download.jpg",
        useraddress: {
          street: "123 Main St",
          city: "Cityville",
          state: "State",
          zipcode: "12345",
          country: "USA"
        },
        userabout: "A brief description about the user goes here. A brief description about the user goes here. A brief description about the user goes here. Thank you",
        sociallinks: {
          twitter: "https://twitter.com/jhonDoe434",
          facebook: "https://www.facebook.com/jhonDoe434",
          instagram: "https://www.instagram.com/jhonDoe434"
        },
        userRating: [1, 2, 3]
     
      
    }
  


  


    return (
    <div className="flex gap-2">


<div className="w-[50%]">
<div className="border-[1px] rounded-md p-4 h-max shadow-md">
<div>
<Image className="rounded-full w-[100px] block mx-auto h-[100px] object-cover border-2 border-black" src={userData.userimage} width={500} height={500} alt="Profile Image"/>

<div className="flex relative justify-center items-center gap-2 my-2 border-[1px] rounded-md w-[130px] p-4 h-max mx-auto">

<div className="bg-orange-500 absolute left-0 bottom-0 rounded-l-md top-0 text-white h-full px-2">
<div className="flex justify-center items-center w-full h-full">
<h2>Start {userData.userRating.length}</h2>
</div>
</div>

<div className="flex justify-center items-center h-full absolute right-0 top-0 text-orange-500 text-[20px]">
   {userData.userRating.map((d, index) => {


return(<div key={index}>

<IoMdStarOutline></IoMdStarOutline>

</div>)
    })}
</div>
</div>
<div>
<h2 className="text-center">{userData.username}</h2>
</div>  
</div>
</div>
<div className="border-[1px] rounded-md p-4 h-max shadow-md my-2">

<div className="flex gap-1 items-center"><FcAbout className="text-[18px]"></FcAbout> <h2 className="text-left font-bold text-[16px] flex gap-1 items-center">About</h2></div>

<p className="p-2">
    {
        userData.userabout
    }
</p>




</div>


<div className="border-[1px] rounded-md p-4 h-max shadow-md my-2">
<h2 className="text-center font-bold text-[20px]">Social Link</h2>

<div className="flex gap-4 justify-center my-2">
<Link href=""> <FaFacebook className="text-[20px] text-blue-600"></FaFacebook> </Link>
<Link href=""> <AiFillTwitterCircle className="text-[20px] text-[#4DA6E9]"></AiFillTwitterCircle> </Link>
<Link href=""> <FaLinkedin className="text-[20px] text-[#007AB5]"></FaLinkedin> </Link>
<Link href=""> <FaPinterest className="text-[20px] text-[#B7081B]"></FaPinterest> </Link>
</div>

</div>








</div>





<div className="border-[1px] rounded-md h-max w-[100%] shadow-md">
<div className="bg-[#5F50BF] rounded-tr-md  rounded-tl-md text-white">
<h2 className="text-[20px] font-bold p-2 text-center">Personal Details</h2>
</div>
<div className="p-4">


<div>
<h2><span className="font-bold">Name:</span> {userData.name}</h2>
<h2><span className="font-bold">Email:</span> {userData.useremail}</h2>
</div>
</div>



<div>
<div><h2 className="font-bold text-center my-2 bg-[#6E5DDB] text-white p-2 w-max mx-auto rounded-md">User Address</h2></div>

<div className="p-4 grid grid-cols-3 gap-4 w-full"> 
<div className="flex">
<h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold">#Street</h2>
<h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md">{userData.useraddress.street}</h2>

</div>


<div className="flex">
<h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold">City</h2>
<h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md">{userData.useraddress.city}</h2>
</div>


<div className="flex">
<h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold">State</h2>
<h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md">{userData.useraddress.state}</h2>
</div>

<div className="flex">
<h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold">Zip Code</h2>
<h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md">{userData.useraddress.zipcode}</h2>
</div>



<div className="flex">
<h2 className="border-l-[1px] bg-[#ddd] border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-l-md font-bold">Country</h2>
<h2 className="border-t-[1px] border-b-[1px] border-r-[1px] w-max px-2 py-1 rounded-r-md">{userData.useraddress.country}</h2>
</div>
</div>


</div>


<div><h2 className="font-bold text-center my-2 bg-[#6E5DDB] text-white p-2 w-max mx-auto rounded-md">Edit Profile</h2></div>

</div>


    </div>
    );
};

export default profile;