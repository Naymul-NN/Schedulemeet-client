
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoMdStarOutline } from "react-icons/io";
const Testimonials = () => {

// .....Testimonials
const testimonialsData = [
    {
      username: "Naymul Islam",
      shortDescription: "Outstanding product quality. Impressed!",
      userImage: "https://i.ibb.co/SRpjswS/photo-1548372290-8d01b6c8e78c.jpg",
      rating: [1, 2, 3]
    },
    {
      username: "MD Ebrahim Kholilullah",
      shortDescription: "Reliable and efficient. Would buy again!",
      userImage: "https://i.ibb.co/cFfsRKR/photo-1560250097-0b93528c311a.jpg",
      rating: [1, 2, 3, 4]
    },
    {
        username: "হাবিবুর রহমান",
        shortDescription: "Impressive features and user-friendly design.",
        userImage: "https://i.ibb.co/rfBMtHV/photo-1573603867003-89f5fd7a7576.jpg",
        rating: [1,]
      },
      {
        username: "Md Moniruzzaman Billal",
        shortDescription: "Highly recommended. Exceeded my expectations!",
        userImage: "https://i.ibb.co/HF1rpwZ/photo-1591084728795-1149f32d9866.jpg",
        rating: [1, 2, 3, 4]
      },

      {
        username: "Rahim Monjur",
        shortDescription: "Fantastic service and support!",
        userImage: "https://i.ibb.co/XpHn4hL/photo-1617137984095-74e4e5e3613f.jpg",
        rating: [1, 2, 3, 4]
      },

  {
        username: "Md. Faisal",
        shortDescription: "Great experience with the product!",
        userImage: "https://i.ibb.co/p3xMvcz/photo-1566753323558-f4e0952af115.jpg",
        rating: [1, 2, 3, 4]
      },


      

  ]



    return (
        <div className="w-full my-10 bg-[#fff] h-[600px]">

            <h2 className="text-center text-black font-bold pt-4 text-[25px] border-b-2 border-orange-500 w-max mx-auto">Testimonials</h2>
            <p className="text-black text-center my-4">Our Client Feadback - We provide best service</p>
 <div className="my-20 flex justify-center"> 
    <Marquee pauseOnHover={true}>


<div className="flex">


{
    testimonialsData.map((dataAll, index) => {
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
 <p className="text-[15px]">{dataAll.shortDescription}</p>            
        </div>
        
        )
    })
}


</div>



  </Marquee></div>
        </div>
    );
};

export default Testimonials;

