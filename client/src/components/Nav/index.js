import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4">
                <div className="container">
                    <a className="navbar-brand" href="/">App Name</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" value="Home"> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lists" value="Shopping">Shopping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lists" value="Calendar">Calendar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lists" value="Family Info">Family Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lists" value="Register">Register/Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;