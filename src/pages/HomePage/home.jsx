import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";
import Records from "@/components/Records/records";
import ScheduleFaster from "@/components/ScheduleFaster/scheduleFaster";
import Reminder from "@/components/Reminder/reminder";
import TestimonialsSection from "@/components/HomePageSections/TestimonialsSection/TestimonialsSection";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Records></Records>
      <ScheduleFaster></ScheduleFaster>
      <Reminder></Reminder>
      <Faq></Faq>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Homepage;
