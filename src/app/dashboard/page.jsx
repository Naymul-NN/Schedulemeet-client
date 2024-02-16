"use client"

import Activity from '@/components/activity/Activity';
import useCheckAdmin from '@/components/hooks/useCheckAdmin';
import Particlas from "@/components/dashboard/adminHome/Particlas"
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
            <Activity></Activity></> ) : (
            <Particlas></Particlas>
               
            )
}
               
            
        </div>
    );
};

export default Dashboaed;
