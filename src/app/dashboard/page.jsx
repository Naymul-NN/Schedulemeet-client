import Activity from '@/components/activity/Activity';
import Image from 'next/image';
import React from 'react';

const Dashboaed = () => {
    return (
        <div className='min-h-screen text-black pl-10 pt-10'>
            
            <h1 className="text-3xl font-bold text-yellow-300">Wellcome to your dashboard.................</h1>
            <Image className="w-[600px]" height="500" width="500" src="https://i.ibb.co/NxCq1vw/3819-jpg-wh860.jpg" alt="" />

            <Activity></Activity>
        </div>
    );
};

export default Dashboaed;