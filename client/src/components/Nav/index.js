import React, { Component } from "react";

class Nav extends Component {

    state = {
        activePageTitle: "Lists"
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4">
                <div className="container">
                    <a className="navbar-brand" href="/">Family Manager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" value="Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lists" value="Lists">Lists</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;