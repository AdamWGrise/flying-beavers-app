import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";


class Home extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <h1>The Home Page</h1>
                <Carousel />
                <Jumbotron>
                    <h2>Welcome</h2>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;
