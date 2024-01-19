import Title from '@/shared/Title/page';
import React from 'react';
import img from '../../../public/images/schedule-fast-img.webp';
import Image from 'next/image';

const page = () => {
    return (
        <div className='my-12 md:my-24 flex flex-col-reverse md:flex-row gap-6 justify-center items-center'>
                <div className='flex-1'>
                    <Image src={img} alt='schedule fast'></Image>
                </div>
                <div className='flex-1 space-y-6'>
                    <h2 className='text-2xl md:text-5xl font-bold'>Schedule Candidate Interviews, Faster</h2>
                    <p className='text-lg font-medium text-gray-400'>Skip the back-and-forth, “just missed yous” that can delay interviews by days or even weeks. Get top talent in for interviews fast so you can hire them even faster. And when deployed with our AI Chatbot, Sense helps you prescreen AND schedule candidates automatically.</p>
                </div>
        </div>
    );
};

export default page;