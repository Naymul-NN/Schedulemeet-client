"use client";

import useAds from "@/components/hooks/useAds";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const AdSlider = () => {
  const { ads, adsLoading } = useAds();

  if (adsLoading) {
    return <p>loading ...</p>;
  }

  console.log(ads);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper">
        {ads.map((ad) => (
          <SwiperSlide  key={ad._id}>
            <div
              className="hero h-[400px] bg-center bg-cover"
              //  need to center and fit
              style={{
                backgroundImage: `url('${ad.thumbnail}')`
              }}>
              <div className="hero-overlay bg-opacity-10"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl  font-italic">{ad.tag}</h1>
                  <p className="mb-5 font-medium text-secondary-content text-3xl">{ad.title}</p>
                  <button className="btn btn-info">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdSlider;
