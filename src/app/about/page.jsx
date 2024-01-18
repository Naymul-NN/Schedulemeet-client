import AboutBanner from "@/components/about/AboutBanner";
import Identity from "@/components/about/Identity";
import React from "react";

export const metadata = {
  title: "About",
  description: "Created by moniruzzaman",
};

const About = () => {
  return (
    <div className=" aboutPageContainer bg-white ">
      <div className="aboutPageWrapper   ">
        {/* about banner starts  */}
        <AboutBanner />
        {/* about banner ends  */}

        {/* identity section starts  */}
        <div className="identitySection  ">
          <Identity />
        </div>
        {/* identity section ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default About;
