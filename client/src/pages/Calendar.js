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
            testState: 0,
            sign: false,
            modalEvent: -1,
            slot: [],
            events: []
        };
        ApiCalendar.onLoad(() => {
            console.log(" Calendar page: * * * ApiCalendar.onLoad");
            ApiCalendar.listenSign(this.signUpdate);
        });
    }

    handleItemClick = (event, name) => {
        console.log(" Calendar page: * * * Clicky - handleItemClick");
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            this.setState({ events: [] });
            ApiCalendar.handleSignoutClick();
        }
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

    signUpdate = (sign) => {
        console.log(" Calendar page: * * * signUpdate");
        let events = [];
        if (ApiCalendar.sign)
            ApiCalendar.listUpcomingEvents(10)
                .then(({ result }) => {
                    console.log(result.items);
                    events = JSON.parse(JSON.stringify(result.items));
                    this.setState({ events: events });
                });
        this.setState({
            sign: sign
        })
    }

    render(props) {
        console.log(" Calendar page: * * * render(props)");
        // this.testest();
        return (
            <div id='content'>
                <EditEventDialog event_idx={this.state.modalEvent} events={this.state.events} slot={this.state.slot} sign={this.state.sign} />
                {/* <AddEventModal /> */}
                <div className="container">
                    <div className="row my-3">
                        <div className="col">
                            <button
                                onClick={(e) => this.handleItemClick(e, 'sign-in')}
                                name="signin"
                                id="signin"
                            >Sign-in</button>
                            <button
                                onClick={(e) => this.handleItemClick(e, 'sign-out')}
                                name="signout"
                                id="signout"
                            >Sign-out</button>
                            <div>You are signed <h2>{this.state.sign ? "in" : "out"}</h2>!</div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <GCalendar
                                events={this.state.events}
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

