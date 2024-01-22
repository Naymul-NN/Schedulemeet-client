
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TestimonialsSection = () => {


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
        userImage: "jhttps://i.ibb.co/rfBMtHV/photo-1573603867003-89f5fd7a7576.jpg",
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
        <div>
  <Marquee>
<div>

<div>
{
    testimonialsData.map(dataAll => {


        return(<>
        <div>
          <h2>{dataAll.username}</h2>
        <Image src={dataAll.userImage} alt="Profile Image" width={80} height={80}></Image>
            
        </div>
        
        </>)
    })
}


</div>


</div>
  </Marquee>
        </div>
    );
};

export default TestimonialsSection;