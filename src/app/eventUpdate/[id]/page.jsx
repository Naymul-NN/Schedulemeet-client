import EventUpdate from '@/components/activity/EventUpdate/EventUpdate';
import React from 'react';

const page = ({params}) => {

    const {id} = params;

    return (
        <div className='min-h-screen'>
            <EventUpdate id={id}></EventUpdate>
        </div>
    );
};

export default page;