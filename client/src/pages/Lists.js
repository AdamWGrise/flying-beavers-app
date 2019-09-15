import React, { Component } from "react";
// import API from "../utils/API";

class Lists extends Component {
    state = {
        lists: []
    };

    // componentDidMount() {
    //     this.loadLists();
    // }

    // loadLists = () => {
    //     API.getLists()
    //         .then(res => this.setState({ lists: res.data }))
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <div>
                <h1>The Lists Page</h1>
            </div>
        );
    }
}

export default Lists;
