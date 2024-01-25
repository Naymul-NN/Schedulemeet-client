
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoMdStarOutline } from "react-icons/io";
import TestimonialsSectionLoad from "./TestimonialsSectionLoad";
const TestimonialsSection = async () => {

const testimonialsData = await TestimonialsSectionLoad();

    return (
        <div className="w-full my-10 bg-[#fff] h-[600px]">

            <h2 className="text-center text-black font-bold pt-4 text-[25px] border-b-2 border-orange-500 w-max mx-auto">Testimonials</h2>
            <p className="text-black text-center my-4">Our Client Feadback - We provide best service</p>
 <div className="my-20 flex justify-center"> 
    <Marquee pauseOnHover={true}>


<div className="flex">


{
    testimonialsData.result.map((dataAll, index) => {
        return(
        <div key={index} className="text-black w-[50%] mx-2 text-center bg-[#fff] shadow-lg p-10 border-[1px]">

<Image className="block mx-auto border-[2px] border-orange-500" src={dataAll.userImage} alt="Profile Image" width={100} height={100} style={{ borderRadius: '100%', height: '100px', objectFit: "cover" }} />

<div className="flex justify-center items-center">

<div className="border-[1px] bg-orange-500 text-white rounded-full px-2 my-2">Star {dataAll.rating.length}</div> 
  <div className="flex justify-center">
    {
        dataAll.rating.map((ratingID, index) => {
            return (<div key={index}>
              <IoMdStarOutline className="text-orange-500 text-[20px]"/>
            </div>)
        })
    }
 </div>

</div>

 <h2 className="font-bold my-2">{dataAll.username}</h2>
 <p className="text-[15px]"><span className="text-[25px] font-serif">"</span>{dataAll.shortDescription}<span className="text-[25px] font-serif">"</span></p>            
        </div>
        
        )
    })
}


</div>



  </Marquee></div>
        </div>
    );
};

export default TestimonialsSection;

