import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import InfoMain from '../components/InfoMain';
import API from "../utils/API";

class FamilyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePageTitle: 'Family Info'
            // shopItems: [],
            // shoppingList: "",
            // itemName: "",
            // category: "",
            // quantity: "1",
            // quantityUnits: "",
            // newItem: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // This group of functions: For Mongo connection stuff; Adam 9/19

    componentDidMount() {
        this.loadShopItems();
    }

    loadShopItems = () => {
        API.getShopItems()
            .then(res => this.setState({ shopItems: res.data, shoppingList: "", itemName: "", category: "", quantity: "", quantityUnits: "" })
            )
            .catch(err => console.log(err));
    };

    deleteShopItem = id => {
        API.deleteShopItem(id)
            .then(res => this.loadShopItems())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log("test");
        const { name, value } = event.target;
        console.log(event.target);

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("clicky");
        console.log("this.state.newItem", this.state.newItem);
        event.preventDefault();

        if (this.state.newItem) {
            API.saveShopItem({
                itemName: this.state.newItem,
                shoppingList: this.state.shoppingList,
                category: this.state.category,
                quantity: this.state.quantity,
                quantityUnits: this.state.quantityUnits,
                date: new Date(Date.now())
            })
                .then(res => this.loadShopItems())
                .catch(err => console.log(err));
        } else {
            console.log("this.state", this.state);
        }
    };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <Jumbotron pageName={this.state.activePageTitle} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>
                            <InfoMain />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FamilyInfo
