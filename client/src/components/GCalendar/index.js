import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './styles.css';

const localizer = momentLocalizer(moment);
const now = new Date();
const bevents = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 6, 0),
        end: new Date(2019, 6, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 3, 7),
        end: new Date(2019, 3, 10),
    },
    {
        id: 2,
        title: 'Right now Time Event',
        start: now,
        end: now,
    },
]

function convertEvents(events) {
    events = JSON.parse(JSON.stringify(events)); // make a deep copy
    events.forEach(ev => {
        ev.title = ev.summary;
    });
    console.log("hi", events);
    return events;
}

function GCalendar(props) {
    let events = convertEvents(props.events);
    if (props.sign) {
        if (props.events.length > 0) {
            return (
                <div className="container">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={bevents}
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
