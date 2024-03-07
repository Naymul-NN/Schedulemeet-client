'use client'
import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';


const Scheduler = () => {
    return (
        <ScheduleComponent >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}/>
        </ScheduleComponent>
    );
};

export default Scheduler;