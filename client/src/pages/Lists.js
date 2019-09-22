import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import StarBtn from "../components/StarBtn";
import { List, ListItem } from "../components/List";
import "./styles.css";

class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeListId: 0,
            activePageTitle: 'Lists',
            shopLists: [],
            shopItems: [],
            shoppingList: "",
            itemName: "",
            category: "",
            quantity: "1",
            quantityUnits: "",
            newShopItem: "",
            newShopList: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormSubmitList = this.handleFormSubmitList.bind(this);

    }

    // This group of functions: For Mongo connection stuff; Adam 9/19
    componentDidMount() {
        this.loadShopLists();
        this.loadShopItems();
    }

    loadShopLists = () => {
        console.log("loading shopLists");
        API.getShopLists()
            .then(res => this.setState({ shopLists: res.data })
            )
            .catch(err => console.log(err));
    };

    loadShopItems = () => {
        console.log("loading shopItems");
        API.getShopItems()
            .then(res => this.setState({ shopItems: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteShopItem = id => {
        console.log("*Click* - delete");
        API.deleteShopItem(id)
            .then(res => this.loadShopItems())
            .catch(err => console.log(err));
    };

    starShopItem = id => {
        console.log("*Click* - update");
        API.starShopItem(id)
            .then(res => this.loadShopItems())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log("this.state.newShopItem", this.state.newShopItem);
        console.log("this.state.newShopList", this.state.newShopList);

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Save new shopping ITEM to the database
    handleFormSubmit = event => {
        console.log("*Click* - Save new shopping ITEM");
        event.preventDefault();
        if (this.state.newShopItem) {
            API.saveShopItem({
                itemName: this.state.newShopItem,
                shoppingList: this.state.shoppingList,
                category: this.state.category,
                quantity: this.state.quantity,
                quantityUnits: this.state.quantityUnits,
                date: new Date(Date.now())
            })
                .then(res => this.loadShopItems())
                .catch(err => console.log(err));
        }
    };

    // Save new shopping LIST to the database
    handleFormSubmitList = event => {
        console.log("*Click* - Save new shopping LIST");
        event.preventDefault();
        const newShopList = this.state.newShopList;
        if (this.state.newShopList) {
            API.saveShopList({
                listName: newShopList
            })
                .then(res => this.loadShopLists())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h4>Your Lists</h4>
                            <select>
                                {this.state.shopLists.map(shopList => (
                                    <option key={shopList._id} value={shopList._id} id={shopList._id}>
                                        {shopList.listName}
                                    </option>
                                ))}
                            </select>
                            <form>
                                <Input
                                    value={this.state.newShopList}
                                    onChange={this.handleInputChange}
                                    name="newShopList"
                                    placeholder="Create a new list"
                                    className="form-control list-input-1 form-control-sm"
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmitList}
                                    className="form-control form-control-sm btn btn-primary list-submit-btn"
                                >
                                    Add List
                                    </FormBtn>
                            </form>


                        </div>
                        <div className='col-sm-8'>
                            <div>
                                <h4>List Title</h4>
                                <List>
                                    {this.state.shopItems.map(shopItem => (
                                        <ListItem key={shopItem._id}>
                                            <span>
                                                {shopItem.itemName}, {shopItem.quantity} {shopItem.quantityUnits}
                                            </span>
                                            <StarBtn
                                                onClick={() => this.starShopItem(shopItem._id)}
                                                starred={shopItem.starred}
                                            />
                                            <DeleteBtn onClick={() => this.deleteShopItem(shopItem._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                                <br />
                                <form>
                                    <Input
                                        value={this.state.newShopItem}
                                        onChange={this.handleInputChange}
                                        name="newShopItem"
                                        placeholder="Add an item:"
                                        className="form-control list-input-1 form-control-sm"
                                    />
                                    <Input
                                        value={this.state.quantity}
                                        onChange={this.handleInputChange}
                                        name="quantity"
                                        placeholder="Quantity:"
                                        className="form-control list-input-2 form-control-sm"
                                    />
                                    <Input
                                        value={this.state.quantityUnits}
                                        onChange={this.handleInputChange}
                                        name="quantityUnits"
                                        placeholder="Units:"
                                        className="form-control form-control-sm"
                                    />
                                    <Input
                                        value={this.state.category}
                                        onChange={this.handleInputChange}
                                        name="category"
                                        placeholder="Category:"
                                        className="form-control form-control-sm"
                                    />
                                    <FormBtn
                                        onClick={this.handleFormSubmit}
                                        className="form-control form-control-sm btn btn-primary list-submit-btn"
                                    >
                                        Add item
                                    </FormBtn>
                                </form>
                                <br />
                            </div>
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
};

export default Lists;
