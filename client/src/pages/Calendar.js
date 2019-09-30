import React, { Component } from 'react';
import Footer from '../components/Footer';
import { TextArea, FormBtn, Input } from "../components/Form";
import Calendar from '../components/Calendar';
import ApiCalendar from 'react-google-calendar-api';
import API from "../utils/API";
import "./styles.css";

class Calendar2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testState: 0,
            sign: ApiCalendar.sign,
            events: []
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.signUpdate = this.signUpdate.bind(this);
        ApiCalendar.onLoad(() => {
            console.log("stuff");
            ApiCalendar.listenSign(this.signUpdate);
        });
    }

    handleItemClick(event, name) {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            this.setState({ events: [] });
            ApiCalendar.handleSignoutClick();
        }
    }

    signUpdate(sign) {
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
        const eventList = this.state.events;
        return (
            <div id='content'>
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
                            <div>test {eventList.length > 0 ? "events" : "no events"}</div>
                            <div>test {eventList.length > 0 ? eventList[0].summary : "no events"}</div>
                            <div>test {eventList.length > 0 ? eventList[0].description : "no events"}</div>
                            <div>test {eventList.length > 0 ? eventList[0].created : "no events"}</div>
                            <div>test {eventList.length > 0 ? eventList[0].location : "no events"}</div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Calendar2

