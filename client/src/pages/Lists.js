import React, { Component } from 'react';
import Footer from '../components/Footer';
import ContentPanel from '../components/ContentPanel';
import ListClick from '../components/ListClick';
import { Input, TextArea, FormBtn } from "../components/Form";

import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";

class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeListId: 0,
            activePageTitle: 'Lists',
            // Below: Adding items for db parts of state
            shopItems: [],
            shoppingList: "",
            itemName: "",
            category: "",
            quantity: "",
            quantityUnits: "",
            newItem: ""
        };
        this.handleListClick = this.handleListClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }





    // ,.-~*'`'*~-.,
    // ,.-~*'`'*~-.,
    // This group of functions: For Mongo connection stuff; Adam 9/19

    componentDidMount() {
        this.loadShopItems();
    }

    loadShopItems = () => {
        console.log("loading shop items");
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

    handleListClick = (event) => {
        console.log('CLICKY');
        event.preventDefault();
        this.setState({
            activeListId: event.target.value
        });
    }

    handleInputChange = event => {
        console.log("test");
        const { name, value } = event.target;
        console.log(event.target);

        this.setState({
            newItem: value
        });
    };

    handleFormSubmit = event => {
        console.log("clicky");
        console.log("this.state.newItem", this.state.newItem);
        event.preventDefault();

        if (this.state.newItem) {
            API.saveShopItem({
                itemName: this.state.newItem,
                shoppingList: "HyVee",
                category: "Produce",
                quantity: "6",
                quantityUnits: "",
                date: new Date(Date.now())
            })
                .then(res => this.loadShopItems())
                .catch(err => console.log(err));
        }

        // if (this.state.shoppingList && this.state.itemName && this.state.quantity && this.state.quantityUnits) {
        //     API.saveShopItem({
        //         shoppingList: this.state.shoppingList,
        //         category: this.state.category,
        //         itemName: this.state.itemName,
        //         quantity: this.state.quantity,
        //         quantityUnits: this.state.quantityUnits,
        //     })
        //         .then(res => this.loadShopItems())
        //         .catch(err => console.log(err));
        // }
    };
    // `'*~-.,.-~*'`
    // `'*~-.,.-~*'`

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <Jumbotron pageName={this.state.activePageTitle} />
                        </div>
                    </div>
                    <form>
                        <Input
                            value={this.state.newItem}
                            onChange={this.handleInputChange}
                            name="newItem"
                            placeholder="Add a new list item:"
                        />
                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Add item
                        </FormBtn>
                    </form>

                    <div className='row'>
                        <div className='col-sm'>
                            <List>
                                {this.state.shopItems.map(shopItem => (
                                    <ListItem key={shopItem._id}>
                                        <strong>
                                            {shopItem.itemName}, {shopItem.quantity} {shopItem.quantityUnits}
                                        </strong>
                                        <DeleteBtn onClick={() => this.deleteShopItem(shopItem._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 my-3'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists
