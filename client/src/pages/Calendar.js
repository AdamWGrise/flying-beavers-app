import React, { Component } from 'react';
import Footer from '../components/Footer';
import { FormBtn, Input } from "../components/Form";
import GCalendar from '../components/GCalendar';

import "./styles.css";

function EditEventDialog(props) {
    // console.log(" Calendar page: * * * fn EditEventDialog(props)");
    // console.log(" props.sign: ", props.sign);
    // (props.sign && props.events.length > 0 && props.modalEvent >= 0)
    var ev = {};

    if (props.modalEvent >= 0 && props.events.length>0) {
        ev = {
            summary: props.events[props.modalEvent].summary,
            description: props.events[props.modalEvent].description,
            start: props.events[props.modalEvent].start,
            stop: props.events[props.modalEvent].stop,
        };
    } else {
        ev = {
            summary: 'Create Event',
            description: '',
            start: props.newStart,
            stop: props.newStop,
        };
    }

    // If user is logged in to Google
    // and modalEvent is not -1
    let isNewEvent = props.modalEvent ===-1;
    let saveButton;
    if (isNewEvent) {
        saveButton = 
        <FormBtn
            onClick={props.handleGCalendarEventSave}
            className="form-control form-control-sm btn btn-primary list-submit-btn"
        >
            Save Event
        </FormBtn>;        
    } else {
        saveButton = "";
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {ev.summary}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">                     
                            <form>
                                <br />Summary<br />
                                <Input 
                                    value={props.newEvent.summary} 
                                    onChange={props.handleInputChange}
                                    name="newSummary" 
                                    placeholder="(Summary)"
                                    className="form-control form-control-sm list-w-3"/>
                                <br />Description<br />
                                <Input 
                                    value={props.newEvent.description} 
                                    onChange={props.handleInputChange}
                                    name="newDescription" 
                                    placeholder="(Description)"
                                    className="form-control form-control-sm list-w-3"/>
                                <br />Start<br />
                                <Input 
                                    value={props.newEvent.start} 
                                    onChange={props.handleInputChange}
                                    name="newStart" 
                                    placeholder="(Start Time)"
                                    className="form-control form-control-sm list-w-3"/>
                                <br />Stop<br />
                                <Input 
                                    value={props.newEvent.stop} 
                                    onChange={props.handleInputChange}
                                    name="newStop" 
                                    placeholder="(Stop Time)"
                                    className="form-control form-control-sm list-w-3"/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {saveButton}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

class CalendarPage extends Component {
    constructor(props) {
        // console.log(" Calendar page: * * * CalendarPage constructor");
        super(props)
        this.state = {
            modalEvent: -1,
            slot: [],
            newDescription:"",
            newStart:new Date(), 
            newStop:new Date(), 
            newSummary:""
        };
        // this.handleGCalendarEventSave = this.handleGCalendarEventSave.bind(this);
    }

    handleEventClick = (event) => {
        console.log("Clicky - handleEventClick", event);    

        this.setState(
            { 
                modalEvent: event.id, 
                newSummary: event.title,
                newDescription:event.description,
                newStart:event.start,
                newStop:event.end,
                slot:[]
            }
        );
        if (this.props.sign) {
            window.$("#exampleModal").modal();
        }
    }

    handleSlotSelect = (slot) => {
        console.log("Clicky - handleSlotSelect", slot);
        this.setState(
            { 
                modalEvent: -1, 
                newSummary: "",
                newDescription:"",
                newStart:slot.start,
                newStop:slot.end,
                slot:slot
            }
        );        
        if (false && this.props.sign) {
            window.$("#exampleModal").modal();
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    // Save new event to user's GCalendar
    handleGCalendarEventSave = event => {
        console.log("*Click* - Save new EVENT");
        event.preventDefault();
        const newEvent = 
        {
            summary:this.state.newSummary,
            description:this.state.newDescription,
            start:new Date(this.state.newStart),
            stop:new Date(this.state.newStop),
        };

        console.log("Save this event!", newEvent); 

//        ApiCalendar.createEventFromNow({summary:"hi there event", time: 480});
//        ApiCalendar.createEvent(newEvent);

    };

    render() {
        // console.log(" Calendar page: * * * render(props)");
        // this.testest();
        // window.$("#exampleModal").modal();
        const newEvent = 
        {
            summary:this.state.newSummary,
            description:this.state.newDescription,
            start:this.state.newStart,
            stop:this.state.newStop,
        };        
        return (
            <div id='content'>
                <EditEventDialog 
                    handleInputChange={this.handleInputChange} 
                    newEvent={newEvent}
                    handleGCalendarEventSave={this.handleGCalendarEventSave} 
                    modalEvent={this.state.modalEvent} 
                    events={this.props.events} 
                    slot={this.state.slot} 
                    sign={this.props.sign} />

                <div className="container">
                    <div className="row my-3">
                        <div className="col">
                            <GCalendar
                                events={this.props.events}
                                sign={this.state.sign}
                                handleEventClick={this.handleEventClick}
                                handleSlotSelect={this.handleSlotSelect}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 my-3'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CalendarPage

