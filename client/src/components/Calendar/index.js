import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import './styles.css';

function Calendar(props) {
    if (props.sign) {
        return (
            <div className="container">
                test
                    <div>test {props.events.length > 0 ? "events" : "no events"}</div>
            </div>
        );
    } else {
        return (
            <div className="container">
                log in
            </div>
        )
    }
}

export default Calendar;
