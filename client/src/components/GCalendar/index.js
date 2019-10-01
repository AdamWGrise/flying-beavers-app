import React from 'react';
// import ApiCalendar from 'react-google-calendar-api';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './styles.css';

const localizer = momentLocalizer(moment);
// const now = new Date();

function convertEvents(events) {
    let r = [];
    events.map((ev, index) => {
        r.push({
            title: ev.summary,
            id: index,
            allDay: ev.start.date ? true : false,
            start: moment(ev.start.date ? ev.start.date : ev.start.dateTime).toDate(),
            end: moment(ev.end.date ? ev.end.date : ev.end.dateTime).toDate(),
        });
    });
    return r;
}

function GCalendar(props) {
    let events = convertEvents(props.events);
    let cal = <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "64vh" }}
        selectable={true}
        onSelectEvent={props.handleEventClick}
        onSelectSlot={props.handleSlotSelect}
    />
    if (props.sign) {
        if (props.events.length > 0) {
            return (
                <div className="container">
                    {cal}
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
                    {cal}
                    <div>No events</div>
                </div>
            )
        }
    } else {
        return (
            <div className="container">
                {cal}
            </div>
        )
    }
}

export default GCalendar;
