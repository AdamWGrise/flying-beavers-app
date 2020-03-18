import React, { Component } from 'react';
import ApiCalendar from 'react-google-calendar-api';


class GoogleLoginButtons extends Component {
    constructor(props) {
        console.log(" * * * GoogleLoginButtons constructor");
        super(props)
        ApiCalendar.onLoad(() => {
            console.log("ApiCalendar.onLoad");
            ApiCalendar.listenSign(this.signUpdate);
        });
    }
    handleItemClick = (event, name) => {
        console.log("Clicky - GoogleLoginButtons handleItemClick");
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            ApiCalendar.handleSignoutClick();
        }
    }
    signUpdate = (sign) => {
        console.log(" Calendar page: * * * signUpdate", sign);
        let events = [];
        if (ApiCalendar.sign) {
            ApiCalendar.listUpcomingEvents(10)
            .then(({ result }) => {
                this.props.onEvents(JSON.parse(JSON.stringify(result.items)));
            });
        }
        this.props.signUpdate(sign);
    }    
    render() {
        return (
            <div className="container">
                <br/><br/><br/><br/><br/>
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
                        <div>You are signed {this.props.sign ? "in" : "out"}!</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleLoginButtons
