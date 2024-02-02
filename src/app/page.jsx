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
      <div className="min-h-screen bg-[#0d0c22]">
        <Banner></Banner>
        <Records></Records>
        <ScheduleFaster></ScheduleFaster>
        <Reminder></Reminder>
        <Faq></Faq>
        <Future></Future>
   
      </div>
     </Container>     

<div>
<div className="bg-[#0D0C22]">
<Container>
<Testimonials></Testimonials>
</Container>
</div>
</div>

    </Layout>


 );
};

export default Home;
