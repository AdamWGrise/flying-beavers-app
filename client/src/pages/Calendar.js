import React, { Component } from 'react';
import Footer from '../components/Footer';
// import { TextArea, FormBtn, Input } from "../components/Form";
import GCalendar from '../components/GCalendar';
import ApiCalendar from 'react-google-calendar-api';
// import API from "../utils/API";
import "./styles.css";

class CalendarPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testState: 0,
            sign: ApiCalendar.sign,
            events: []
        };
        ApiCalendar.onLoad(() => {
            console.log("stuff");
            ApiCalendar.listenSign(this.signUpdate);
        });
    }

    handleItemClick = (event, name) => {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            this.setState({ events: [] });
            ApiCalendar.handleSignoutClick();
        }
    }

    handleEventClick = (event) => {
        console.log(this.state.events[event.id]);
        window.$("#exampleModal").modal();
    }
    handleSlotSelect = (slot) => {
        console.log(slot);
        window.$("#exampleModal").modal();
    }

    signUpdate = (sign) => {
        let events = [];
        console.log("signUpdate");
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
        console.log("render(props)");
        const eventList = this.state.events;
        return (
            <div id='content'>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <AddEventModal /> */}
                <div className="container">
                    <div className="row my-3">
                        <div className="col">
                            <button
                                onClick={(e) => this.handleItemClick(e, 'sign-in')}
                                name="signin"
                                id="signin"
                            >
                                Sign-in
                </button>
                            <button
                                onClick={(e) => this.handleItemClick(e, 'sign-out')}
                                name="signout"
                                id="signout"
                            >
                                Sign-out
                </button>
                            <div>
                                You are signed {this.state.sign ? "in" : "out"}!
                    </div>

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

