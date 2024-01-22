import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";
import Records from "@/components/Records/records";
import ScheduleFaster from "@/components/ScheduleFaster/schedulefaster";
import Reminder from "@/components/Reminder/reminder";
import TestimonialsSection from "@/components/HomePageSections/TestimonialsSection/TestimonialsSection";


const Homepage = () => {
    return (<>
   
        <div>
            <Banner></Banner>
            <Records></Records>
            <ScheduleFaster></ScheduleFaster>
            <Reminder></Reminder>
            <Faq></Faq>
        </div>

        <TestimonialsSection></TestimonialsSection>
    </> );
};

export default Homepage;