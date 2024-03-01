import MeetingUpdate from '@/components/activity/MeetingUpdate';
import React from 'react';

const page = ({params}) => {

    const {id} = params;

    return (
        <div className='min-h-screen'>
            <MeetingUpdate id={id}></MeetingUpdate>
        </div>
    );
};

export default page;