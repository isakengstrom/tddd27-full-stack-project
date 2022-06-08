import React from 'react';
import moment from 'moment';

import "./styles.scss";


const IsoWeekCalendar = (props) => {


    const createIsoWeekCalendar = () => {

        const value = moment();
        const startDay = value.clone().startOf('isoWeek');
        const endDay = startDay.clone().endOf('isoWeek');
        const day = startDay.clone().subtract(1, 'day');
        const calendar = [];

        while(day.isBefore(endDay, 'day')) {
            calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            );
        }

        return(
            <div className="isoWeekCalendar">
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div className="day">{day.format('D').toString()}</div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return(
        <div>
            {createIsoWeekCalendar()}
        </div>
    );
}

export default IsoWeekCalendar;
