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


const accordionStyles = {
    backgroundColor: '#0d0c22', // Set your desired background color
    border: '1px solid #ddd',   // Set border styles
    borderRadius: '8px',        // Set border radius
    marginBottom: '16px',
    color: 'white'      // Set margin at the bottom
};

const Faq = () => {
    return (
        <div className="my-12 flex flex-col md:flex-row justify-center items-center">
            <div className='flex-1 flex justify-center items-center'>
            <Lottie loop={true} animationData={FAQ}></Lottie>
            </div>
            <div className='flex-1'>
                <Accordion allowMultipleExpanded style={accordionStyles}>
                    <AccordionItem>
                        <AccordionItemHeading >
                            <AccordionItemButton >
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;