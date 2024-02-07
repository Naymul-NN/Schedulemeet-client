"use client"

import Activity from '@/components/activity/Activity';
import useCheckAdmin from '@/components/hooks/useCheckAdmin';

import Image from 'next/image';
import React from 'react';

const Dashboaed = () => {

    const { isAdmin, adminCheckLoading } = useCheckAdmin();

    if (adminCheckLoading) {
        return <p>loading ....</p>; 
      }
      console.log(isAdmin);

    return (
        <div className='min-h-screen text-black pl-10 pt-10'>
           { !isAdmin ? ( <>
            <h1 className="text-3xl font-bold text-yellow-300">Wellcome to your dashboard.................</h1>
            <Image className="w-[600px]" height="500" width="500" src="https://i.ibb.co/NxCq1vw/3819-jpg-wh860.jpg" alt="" />
            <Activity></Activity></> ) : (
                <> <h1>this is admin power route</h1></>
            )
}
               
            
        </div>
    );
};

export default Dashboaed;
