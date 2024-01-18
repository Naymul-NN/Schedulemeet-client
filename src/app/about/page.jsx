import AboutBanner from "@/components/about/AboutBanner";
import React from "react";
import Benefits from "./../../components/about/Benefits";

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

        {/*  */}
      </div>
      {/* benefits section */}
      <Benefits />
    </div>
  );
};

export default About;
