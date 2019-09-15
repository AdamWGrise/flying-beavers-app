import React, { Component } from "react";
// import API from "../utils/API";
import Shopping from "../components/Shopping";

const dummyData = [
    ["Eggs", "Milk", "Cinnamon"],
    ["Fish", "Beer", "Pizza"],
    ["Cats", "Litter", "Toy"]
]

class Lists extends Component {
    state = {
        testList: ["Eggs", "Milk", "Cinnamon"]
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

                <div className="container">
                    <div className="row">
                        <div className="col-3 my-3">
                            <select className="custom-select my-3">
                                <option selected>Select a List:</option>
                                <option value="1">Costco</option>
                                <option value="2">Cub</option>
                                <option value="3">Target</option>
                            </select>
                            <ul className="list-group">
                                <li className="list-group-item">All</li>
                                <li className="list-group-item">Today</li>
                                <li className="list-group-item">This Week</li>
                                <li className="list-group-item">Next 7 days</li>
                            </ul>
                        </div>
                        <div className="col-9 content-area my-3">
                            <Shopping list={this.state.testList} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Lists;
