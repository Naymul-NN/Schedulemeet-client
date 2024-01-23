import React from 'react';
import reminder from '../../../public/images/reminder-img.webp';
import Image from 'next/image';

const page = () => {
    return (
        <div className='my-12 md:my-24 flex flex-col md:flex-row gap-6 justify-center items-center'>
            <div className='flex-1 space-y-6'>
                <h2 className='text-2xl md:text-5xl font-bold'>Reduce Interview No Shows</h2>
                <p className='text-lg font-medium text-gray-400'>Send meeting reminders automatically to keep candidates engaged and excited about their interviews (and away from the competition).</p>
            </div>
            <div className='flex-1'>
                <Image src={reminder} alt='reminder'></Image>
            </div>
        </div>
    );
};

export default page;