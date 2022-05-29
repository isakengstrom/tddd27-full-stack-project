import React, { Component } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import "./styles.css";


class Calendar extends Component {

  createCalendar = () => {
        
    const value = moment();
    const startDay = value.clone().startOf('month').startOf('isoWeek');
    const endDay = startDay.clone().add(5, 'week').endOf('isoWeek');
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
      <div className="calendar">
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

  render() {
    return(
        this.createCalendar()
    );
  }
}

export default Calendar;
