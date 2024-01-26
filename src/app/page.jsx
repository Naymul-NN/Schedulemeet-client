import Future from "@/components/Home/Future";
import Banner from "@/components/banner/banner";
import Container from "@/components/container/Container";
import Faq from "@/components/faq/faq";
import Records from "@/components/Records/records";
import ScheduleFaster from "@/components/ScheduleFaster/schedulefaster";
import Reminder from "@/components/Reminder/reminder";
import React from "react";
import Layout from "./mainlayout";
import Testimonials from "../components/Testimonials/Testimonials.jsx";

const Home = () => {
  return (
   <Layout>
    <Container>
      <div className="min-h-screen">
        <Banner></Banner>
        <Records></Records>
        <ScheduleFaster></ScheduleFaster>
        <Reminder></Reminder>
        <Faq></Faq>
        <Future></Future>
        <Testimonials></Testimonials>
      </div>
     </Container>
    </Layout>
  );
};

export default Home;
