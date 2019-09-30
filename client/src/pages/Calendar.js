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

                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <GCalendar 
                                events={this.state.events}
                                sign={this.state.sign}
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

