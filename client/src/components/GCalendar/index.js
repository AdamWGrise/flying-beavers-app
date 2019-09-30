import React from 'react';
// import ApiCalendar from 'react-google-calendar-api';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './styles.css';

const localizer = momentLocalizer(moment);
const now = new Date();
// const bevents = [
//     {
//         id: 0,
//         title: 'All Day Event very long title',
//         allDay: true,
//         start: new Date(2019, 6, 0),
//         end: new Date(2019, 6, 1),
//     },
//     {
//         id: 1,
//         title: 'Long Event',
//         start: new Date(2019, 3, 7),
//         end: new Date(2019, 3, 10),
//     },
//     {
//         id: 2,
//         title: 'Right now Time Event',
//         start: now,
//         end: now,
//     },
// ]

function convertEvents(events) {
    // events = JSON.parse(JSON.stringify(events)); // make a deep copy
    let r = [];
    events.map((ev,index) => {
        r.push({
            title: ev.summary,
            id: index,
            allDay:ev.start.date?true:false,
            start: moment(ev.start.date?ev.start.date:ev.start.dateTime).toDate(),
            end: moment(ev.end.date?ev.end.date:ev.end.dateTime).toDate(),
        });
    });
    console.log("hi", r);
    console.log("bye", events.length>0?moment(events[0].start).toDate():0)
    return r;
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
                        events={events}
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
