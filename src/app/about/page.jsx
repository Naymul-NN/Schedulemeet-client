import AboutBanner from "@/components/about/AboutBanner";
import React from "react";

export const metadata = {
  title: "About",
  description: "Created by moniruzzaman",
};

const About = () => {
  return (
    <div className=" aboutPageContainer bg-red-200 ">
      <div className="aboutPageWrapper bg-sky-200  ">
        {/* about banner starts  */}
        <AboutBanner />
        {/* about banner ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default About;
