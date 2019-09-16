import React, { Component } from "react";
// import API from "../utils/API";
import Shopping from "../components/Shopping";
import SelectBox from "../components/SelectBox";
import LeftPanel from "../components/LeftPanel";
import Footer from "../components/Footer";
import './teststyles.css';
import ContentPanel from "../components/ContentPanel";
import ListClick from "../components/ListClick"

class Lists extends Component {
    constructor(props) {
        super(props);
        this.handleListClick = this.handleListClick.bind(this);
    }
    state = {
        activeListId: 0,
        testLists: [
            { title: "Zeroth List", items: ["Apples", "Bananas", "Blueberries"] },
            { title: "Colors List", items: ["Blue", "Green", "Red"] },
            { title: "Another List", items: ["Hey", "Hey", "hey"] }
        ]
    };

    // changeColor = () => {
    //     this.setState({color: "blue"});
    //   }

    handleListClick = (event) => {
        console.log("CLICKY");
        event.preventDefault();
        // console.log("Lists.js handleListClick function");
        // console.log("event.target: ", event.target);
        // console.log("event.target.name: ", event.target.name);
        // console.log("event.target.value: ", event.target.value);
        this.setState({
            activeListId: event.target.value
        });
    }

    render() {
        return (
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-3">
                            <h1>The Lists Page</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 my-3">
                            <ListClick
                                activeListId={this.state.activeListId}
                                handleListClick={this.handleListClick}
                                testLists={this.state.testLists}
                            />
                        </div>
                        <div className="col-9 my-3">
                            <ContentPanel
                                activeListId={this.state.activeListId}
                                testLists={this.state.testLists}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 my-3">
                            <Footer />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 my-3">
                            <div id="state">
                                <span>activeListId: {this.state.activeListId}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;
