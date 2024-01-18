import AboutBanner from "@/components/about/AboutBanner";
import BlogValues from "@/components/about/BlogValues";
import Identity from "@/components/about/Identity";
import WorkInfo from "@/components/about/WorkInfo";
import React from "react";
import Benefits from "./../../components/about/Benefits";
import ContactUs from "@/components/about/ContactUs";

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

        {/* work info section starts */}
        <div className="workSection">
          <WorkInfo />
        </div>
        {/* work info section ends */}

        {/* value section starts  */}
        <div className="valueContainer">
          <BlogValues />
        </div>
        {/* value section ends  */}

        {/*  */}
      </div>
      {/* benefits section */}
      <Benefits />
      {/* Contact Us Section */}
      <ContactUs/>
    </div>
  );
};

export default About;
