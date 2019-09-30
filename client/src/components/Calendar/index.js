import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import './styles.css';

function Calendar(props) {
    if (props.sign) {
        if (props.events.length > 0) {
            return (
                <div className="container">
                    <div>
                        {props.events.map(event => (
                            <div>{event.description}</div>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div>No events</div>
                </div>
            )
        }
    } else {
        return (
            <div className="container">
                log in
            </div>
        )
    }
}

export default Calendar;
