import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";
import Records from "@/components/Records/records";
import ScheduleFaster from "@/components/ScheduleFaster/schedulefaster";
import Reminder from "@/components/Reminder/reminder";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Future from "@/components/Home/Future";

// homepages

const Homepage = () => {
    return (
   
        <div>
            <Banner></Banner>
            <Records></Records>
            <ScheduleFaster></ScheduleFaster>
            <Reminder></Reminder>     
            <Future></Future>
            <Faq></Faq>
       
            <TestimonialsSection></TestimonialsSection>
    
        </div>

        
 );
};

export default Homepage;