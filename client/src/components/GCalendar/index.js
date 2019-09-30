import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './styles.css';

const localizer = momentLocalizer(moment);

function GCalendar(props) {
    if (props.sign) {
        if (props.events.length > 0) {
            return (
                <div className="container">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={props.events}
                        style={{ height: "100vh" }}
                    />
                    <div>
                        {props.events.map((event, index) => (
                            <div key={index}>{event.description}</div>
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

export default GCalendar;
