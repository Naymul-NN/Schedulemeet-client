import Title from '@/shared/Title/title';
import React from 'react';

const page = () => {
    return (
        <div className='my-12'>
            <Title title={"Hire Faster, Spend Less"}></Title>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-6 md:my-12">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic"></time>
                        <div className="text-2xl md:text-5xl text-green-500 font-bold mb-5">263%</div>
                        <div className='text-xl md:text-3xl font-bold text-gray-500'>
                        Increase in Candidates Engaged
                        </div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic"></time>
                        <div className="text-2xl md:text-5xl text-green-500 font-bold mb-5">25K</div>
                        <div className='text-xl md:text-3xl font-bold text-gray-500'>
                        Meetings Scheduled in One Quarter
                        </div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic"></time>
                        <div className="text-2xl md:text-5xl text-green-500 font-bold mb-5">30-81%</div>
                        <div className='text-xl md:text-3xl font-bold text-gray-500'>
                        Decreased Time to Hire
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default page;