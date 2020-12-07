import React, { Component } from 'react';
import moment from 'moment';




class Calendar extends Component {

    createCal = () => {
                
        const value = moment();
        const startDay = value.clone().startOf('month').startOf('isoWeek');
        const endDay = value.clone().endOf('month').endOf('isoWeek');
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
            <div>
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div>{day.format('D').toString()}</div>
                        ))}
                    </div>
                ))}
            </div>

        );
    }

    render() {
        return(
            this.createCal()

        );
    }
}

export default Calendar;