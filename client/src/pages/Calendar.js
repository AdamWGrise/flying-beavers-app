import React, { Component } from 'react';
import Footer from '../components/Footer';
import API from "../utils/API";
import "./styles.css";

class Calendar extends Component {
    state = {
        activePageTitle: 'Home'
    };
    render() {
        return (
            <div id="calendar-wrap" className="container">
                <div className="col text-center">
                    <h1>Calendar!</h1>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
        );
    }
};

export default Calendar;
