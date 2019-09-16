import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

class Home extends Component {
    state = {
        activePageTitle: "Home"
    };

    render() {
        return (
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Carousel />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.state.activePageTitle}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
