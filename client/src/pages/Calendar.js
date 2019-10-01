import React, { Component } from 'react';
import Footer from '../components/Footer';
// import { TextArea, FormBtn, Input } from "../components/Form";
import GCalendar from '../components/GCalendar';
import ApiCalendar from 'react-google-calendar-api';
// import API from "../utils/API";
import "./styles.css";


function EditEventDialog(props) {
    console.log(" Calendar page: * * * fn EditEventDialog(props)");
    console.log(" props.sign: ", props.sign);
    if (props.sign) {
        return (
            <>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    {props.events.length > 0 && <p>{props.events[0].summary}</p>}
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    Title<br />
                                    <input type="text" name="summary" defaultValue="Title"></input><br />
                                    Description<br />
                                    <input type="text" name="description" defaultValue="Description"></input><br />
                                    Start<br />
                                    <input type="text" name="start" defaultValue="Start"></input><br />
                                    Stop<br />
                                    <input type="text" name="stop" defaultValue="Stop"></input><br />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p className="modal">Amen</p>
            </>
        )
    }
}

class CalendarPage extends Component {
    constructor(props) {
        console.log(" Calendar page: * * * CalendarPage constructor");
        super(props)
        this.state = {
            modalEvent: -1,
            slot: []
        };
    }

    handleEventClick = (event) => {
        console.log(" Calendar page: * * * Clicky - handleEventClick");
        this.setState({ modalEvent: event.id })
        window.$("#exampleModal").modal();
    }

    handleSlotSelect = (slot) => {
        console.log(" Calendar page: * * * Clicky - handleSlotSelect");
        this.setState({ modalEvent: -1 })
        this.setState({ slot })
        window.$("#exampleModal").modal();
    }



    render() {
        console.log(" Calendar page: * * * render(props)");
        // this.testest();
        return (
            <div id='content'>
                <EditEventDialog event_idx={this.state.modalEvent} events={this.props.events} slot={this.state.slot} sign={this.props.sign} />
                {/* <AddEventModal /> */}

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

