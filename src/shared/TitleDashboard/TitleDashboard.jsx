import React from 'react';

const TitleDashboard = ({title}) => {
    return (
        <div className='text-3xl md:text-6xl font-semibold flex justify-center text-green-500'>
            {title}
        </div>
    );
};

export default TitleDashboard;