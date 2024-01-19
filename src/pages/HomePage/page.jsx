import Banner from "@/components/banner/page";
import Faq from "@/components/faq/page";
import Records from "@/components/Records/page";
import ScheduleFaster from "@/components/ScheduleFaster/page";
import Reminder from "@/components/Reminder/page";


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Records></Records>
            <ScheduleFaster></ScheduleFaster>
            <Reminder></Reminder>
            <Faq></Faq>
        </div>
    );
};

export default Homepage;