import React, { Component } from 'react';
import Footer from '../components/Footer';
import ContentPanel from '../components/ContentPanel';
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import "./styles.css";

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
            quantity: "1",
            quantityUnits: "",
            newItem: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // This group of functions: For Mongo connection stuff; Adam 9/19

    componentDidMount() {
        this.loadShopItems();
    }

    loadShopItems = () => {
        console.log("loading shop items");
        API.getShopItems()
            .then(res => this.setState({ shopItems: res.data, shoppingList: "", itemName: "", category: "", quantity: "", quantityUnits: "", newItem: "" })
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
                    {/* <div className='row'>
                        <div className='col-sm'>
                            <Jumbotron pageName={this.state.activePageTitle} />
                        </div>
                    </div> */}

                    <div className='row'>
                        <div className='col-sm'>
                            <form>
                                <Input
                                    value={this.state.newItem}
                                    onChange={this.handleInputChange}
                                    name="newItem"
                                    placeholder="Add an item:"
                                />
                                <Input
                                    value={this.state.quantity}
                                    onChange={this.handleInputChange}
                                    name="quantity"
                                    placeholder="Quantity:"
                                />
                                <Input
                                    value={this.state.quantityUnits}
                                    onChange={this.handleInputChange}
                                    name="quantityUnits"
                                    placeholder="Units:"
                                />
                                <Input
                                    value={this.state.category}
                                    onChange={this.handleInputChange}
                                    name="category"
                                    placeholder="Category:"
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >
                                    Add item
                        </FormBtn>
                            </form>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>
                            <List>
                                {this.state.shopItems.map(shopItem => (
                                    <ListItem key={shopItem._id}>
                                        <span>
                                            {shopItem.itemName}, {shopItem.quantity} {shopItem.quantityUnits}
                                        </span>
                                        <DeleteBtn onClick={() => this.deleteShopItem(shopItem._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12 my-3'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists
