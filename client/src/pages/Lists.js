import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Select, Option, Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import StarBtn from "../components/StarBtn";
import { List, ListItem } from "../components/List";
import ListClick from "../components/ListClick";
import "./styles.css";

class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeListId: 0,
            activeListName: "",
            shopLists: [],
            shopItems: [],
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
        this.handleListClick = this.handleListClick.bind(this);
    }

    // This group of functions: For Mongo connection stuff; Adam 9/19
    componentDidMount() {
        this.loadShopLists();
        this.loadShopItems();
    }

    // This function runs after ...? 
    componentDidUpdate() {
    }

    loadShopLists = () => {
        console.log("loading shopLists");
        API.getShopLists()
            .then(res => this.setState({
                shopLists: res.data,
                activeListName: res.data[0] ? res.data[0].listName : "All",
                activeListId: res.data[0] ? res.data[0]._id : 0
            })
            )
            .catch(err => console.log(err));
    };

    loadShopItems = () => {
        console.log("loading shopItems this.state.activeListId", this.state.activeListId);
        API.getShopItems()
            .then(res => this.setState({
                shopItems: res.data.filter(shopItem => {
                    return shopItem.shoppingList === this.state.activeListId;
                })
            })
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
        console.log("handleInputChange event:", event);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleListClick = event => {
        console.log("handleListClick event:", event.target.name, event.target.value);
        const { name, value } = event.target;
        const activeListId = value;
        const activeListObject = this.state.shopLists.filter(function (list) {
            return (list._id === activeListId);
        });
        const shoppingListName = activeListObject[0] ? activeListObject[0].listName : "All";
        this.setState({
            activeListId: activeListId,
            activeListName: shoppingListName
        });
        this.loadShopItems();
    };

    handleSelectChange = event => {
        console.log("handleSelectChange event:", event);
        const { name, value } = event.target;
        const activeListId = value;
        const activeListObject = this.state.shopLists.filter(function (list) {
            return (list._id === activeListId);
        });
        const shoppingListName = activeListObject[0] ? activeListObject[0].listName : "All";
        this.setState({
            activeListId: activeListId,
            activeListName: shoppingListName
        });
        this.loadShopItems();
    };

    // Save new shopping ITEM to the database
    handleFormSubmit = event => {
        console.log("*Click* - Save new shopping ITEM");
        event.preventDefault();
        if (this.state.newShopItem) {
            API.saveShopItem({
                itemName: this.state.newShopItem,
                shoppingList: this.state.activeListId,
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


                            <ListClick
                                list={this.state.shopLists}
                                onClick={this.handleListClick}
                            />


                            {/* <form>
                                <Select
                                    className="form-control form-control-sm"
                                    onChange={this.handleSelectChange}
                                    name="activeListId"
                                >
                                    {this.state.shopLists.map(shopList => (
                                        <Option
                                            key={shopList._id}
                                            value={shopList._id}
                                        >
                                            {shopList.listName}
                                        </Option>
                                    ))}
                                </Select>
                            </form> */}


                            <br />
                            <form>
                                <Input
                                    className="form-control list-input-1 form-control-sm"
                                    onChange={this.handleInputChange}
                                    value={this.state.newShopList}
                                    name="newShopList"
                                    placeholder="Create a new list"
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
                            <h4>{this.state.activeListName}</h4>
                            <List>
                                {this.state.shopItems.map(shopItem => (
                                    <ListItem key={shopItem._id}>
                                        <StarBtn
                                            onClick={() => this.starShopItem(shopItem._id)}
                                            starred={shopItem.starred}
                                        />
                                        <span className="shoppinglist-item">
                                            {shopItem.itemName}, {shopItem.quantity} {shopItem.quantityUnits}
                                        </span>
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
                                




                            <form className="form-row">
                                <div className="form-group col-sm-3 mb-2">
                                    <label htmlFor="addListItem" className="sr-only">Add an item</label>
                                    <input type="text" className="form-control" id="addListItem" placeholder="Add an item" />
                                </div>
                                <div className="form-group mb-2 col-sm-1">
                                    <label htmlFor="listItemQuantity" className="sr-only">Quantity</label>
                                    <input type="text" className="form-control" id="listItemQuantity" placeholder="Qty" />
                                </div>
                                <div className="form-group mb-2 col-sm-2">
                                    <label htmlFor="listItemUnits" className="sr-only">Units</label>
                                    <input type="text" className="form-control" id="listItemUnits" placeholder="Units" />
                                </div>
                                <div className="form-group mb-2 col-sm-2">
                                    <label htmlFor="listItemCategory" className="sr-only">Category</label>
                                    <input type="text" className="form-control" id="listItemCategory" placeholder="Category" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 ml-2">Add Item</button>
                            </form>





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
