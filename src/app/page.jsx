import Future from "@/components/Home/Future";
import Banner from "@/components/banner/banner";
import Container from "@/components/container/Container";
import Faq from "@/components/faq/faq";
import Records from "@/components/Records/records";
import ScheduleFaster from "@/components/ScheduleFaster/schedulefaster";
import Reminder from "@/components/Reminder/reminder";
import React from "react";

const Home = () => {
  return (
    <Container>
      <div className="min-h-screen">
        <Banner></Banner>
        <Records></Records>
        <ScheduleFaster></ScheduleFaster>
        <Reminder></Reminder>
        <Faq></Faq>
        <Future></Future>
      </div>
    </Container>
  );
};

export default Home;
