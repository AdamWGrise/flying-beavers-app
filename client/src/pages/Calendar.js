import React, { Component } from 'react';
import Footer from '../components/Footer';
// import { TextArea, FormBtn, Input } from "../components/Form";
import GCalendar from '../components/GCalendar';
import ApiCalendar from 'react-google-calendar-api';
// import API from "../utils/API";
import "./styles.css";


function EditEventDialog(props) {
    // console.log(" Calendar page: * * * fn EditEventDialog(props)");
    // console.log(" props.sign: ", props.sign);
    // (props.sign && props.events.length > 0 && props.modalEvent >= 0)
    var ev = {};

    if (props.modalEvent >= 0)
    {    
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
            start: Date.now().toString(),
            stop: Date.now().toString(),
        };
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
                                Description<br />
                                <input type="text" name="description" defaultValue={ev.description}></input><br />
                                Start<br />
                                <input type="text" name="start" defaultValue={ev.start}></input><br />
                                Stop<br />
                                <input type="text" name="stop" defaultValue={ev.stop}></input><br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
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
            slot: []
        };
    }

    handleEventClick = (event) => {
        console.log("Clicky - handleEventClick");
        this.setState({ modalEvent: event.id })
        window.$("#exampleModal").modal();
    }

    handleSlotSelect = (slot) => {
        console.log("Clicky - handleSlotSelect");
        this.setState({ modalEvent: -1, slot: slot })
        window.$("#exampleModal").modal();
    }

    render() {
        // console.log(" Calendar page: * * * render(props)");
        // this.testest();
        // window.$("#exampleModal").modal();
        return (
            <div id='content'>
                <EditEventDialog modalEvent={this.state.modalEvent} events={this.props.events} slot={this.state.slot} sign={this.props.sign} />

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

