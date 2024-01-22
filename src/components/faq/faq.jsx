'use client'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Lottie from 'lottie-react';
import FAQ from './faq.json';
import Title from '@/shared/Title/title';


const accordionStyles = {
    backgroundColor: '#0d0c22', // Set your desired background color
    border: '1px solid #ddd',   // Set border styles
    borderRadius: '8px',        // Set border radius
    marginBottom: '16px',
    color: 'gray',
    font: 'bold'      // Set margin at the bottom
};

const Faq = () => {
    return (
        <div>
            <Title title={"Why ScheduleMeet?"}></Title>
            <div className="my-12 flex flex-col gap-6 md:flex-row justify-center items-center">
                <div className='flex-1 flex justify-center items-center'>
                    <Lottie loop={true} animationData={FAQ}></Lottie>
                </div>
                <div className='flex-1'>
                    <Accordion allowMultipleExpanded style={accordionStyles}>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton >
                                    How does ScheduleMeet simplify interview scheduling?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    ScheduleMeet streamlines interview coordination by providing an intuitive platform where users can easily set availability, propose meeting times, and confirm schedules. The automated notification system keeps all parties informed, reducing the need for manual follow-ups.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton>
                                    Can I integrate ScheduleMeet with my existing calendar and email system?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Yes, ScheduleMeet seamlessly integrates with popular calendar and email platforms. You can sync your schedules, receive notifications, and manage interviews directly from your preferred calendar application, ensuring a cohesive and synchronized experience.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton>
                                    What happens if an interview participant needs to reschedule or cancel a meeting?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    ScheduleMeet understands that plans can change. Participants can easily reschedule or cancel interviews through the platform. The system automatically updates all parties involved, minimizing disruptions and facilitating smooth communication throughout the process.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton>
                                    Is ScheduleMeet accessible on mobile devices?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Absolutely! ScheduleMeet is designed with a responsive interface, ensuring a seamless experience on both desktop and mobile devices. Whether you are in the office or on the go, you can manage and schedule interviews conveniently from your smartphone or tablet.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton>
                                    How secure is the information shared on ScheduleMeet?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    At ScheduleMeet, security is our top priority. We employ robust encryption protocols to safeguard all user data and ensure the confidentiality of interview details. Rest assured that your information is protected, meeting the highest standards of online security.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;