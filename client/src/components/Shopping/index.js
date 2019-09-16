import React, { Component } from "react";
// import "./style.css";

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { value: '' };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     console.log("selecty", event.target.value);
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     alert('eh: ' + this.state.value);
    //     event.preventDefault();
    // }

    render(props) {
        console.log("props:", props)
        return (
            <div>
                <h1>Shopping List Shows Here</h1>

                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Select a list:
                        <select value={this.state.value} onChange={this.handleChange}>
                            {props.testingLists.map((list, index) => (
                                <option key={index} value={list[0]}>Hello, {list}</option>
                            ))}
                        </select>
                    </label>
                    {/* <input type="submit" value="Submit" /> */}
                {/* </form> */} 
            </div>
        );
    }
}

export default Shopping;

