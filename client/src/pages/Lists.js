import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import StarBtn from "../components/StarBtn";
import CheckBtn from "../components/CheckBtn";

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
        API.getShopLists()
            .then(res => this.setState({
                shopLists: res.data,
                activeListName: res.data[0] ? res.data[0].listName : "All",
                activeListId: res.data[0] ? res.data[0]._id : 0,
                newShopList: ""
            })
            )
            .catch(err => console.log(err));
    };

    loadShopItems = () => {
        API.getShopItems()
            .then(res => this.setState({
                shopItems: res.data.filter(shopItem => {
                    return shopItem.shoppingList === this.state.activeListId;
                }),
                newShopItem: "",
                category: "",
                quantity: "1",
                quantityUnits: "",
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

    checkShopItem = id => {
        console.log("*Click* - update");
        API.checkShopItem(id)
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
        const { value } = event.target;
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

    // handleSelectChange = event => {
    //     console.log("handleSelectChange event:", event);
    //     const { value } = event.target;
    //     const activeListId = value;
    //     const activeListObject = this.state.shopLists.filter(function (list) {
    //         return (list._id === activeListId);
    //     });
    //     const shoppingListName = activeListObject[0] ? activeListObject[0].listName : "All";
    //     this.setState({
    //         activeListId: activeListId,
    //         activeListName: shoppingListName
    //     });
    //     this.loadShopItems();
    // };

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

    groupBy = (xs, key) => {
        return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
          }, {});        
    }

    render() {
        let groupeditems = this.groupBy(this.state.shopItems, 'category');

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
                        <div className='col-sm-8 list-style'>
                            <h4>{this.state.activeListName}</h4>
                            <List>
                            {Object.entries(groupeditems).map((group,index) =>
                            (<ListItem key={group[0]}>
                                <h5>{group[0] ? group[0] : "Uncategorized"}</h5>
                            <List>
                                {group[1].map(shopItem => (
                                    <ListItem key={shopItem._id}>
                                        <CheckBtn
                                            onClick={() => this.checkShopItem(shopItem._id)}
                                            checked={shopItem.needed}
                                        />
                                        <span className="shoppinglist-item">
                                            {shopItem.itemName}, {shopItem.quantity} {shopItem.quantityUnits}
                                        </span>
                                        
                                        <DeleteBtn onClick={() => this.deleteShopItem(shopItem._id)} />
                                        <StarBtn
                                            onClick={() => this.starShopItem(shopItem._id)}
                                            starred={shopItem.starred}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <br />
                            </ListItem>))}
                            </List>

                            {/* Add List Item */}
                            {/* <div className="card"> */}
                            <div className="d-flex justify-content-center">
                                <form>
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <Input
                                                value={this.state.newShopItem}
                                                onChange={this.handleInputChange}
                                                name="newShopItem"
                                                placeholder="(Add an item)"
                                                className="form-control form-control-sm list-w-3"
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <Input
                                                value={this.state.quantity}
                                                onChange={this.handleInputChange}
                                                name="quantity"
                                                placeholder="(Quantity)"
                                                className="form-control form-control-sm list-w-1"
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <Input
                                                value={this.state.quantityUnits}
                                                onChange={this.handleInputChange}
                                                name="quantityUnits"
                                                placeholder="(Units)"
                                                className="form-control form-control-sm list-w-2"
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <Input
                                                value={this.state.category}
                                                onChange={this.handleInputChange}
                                                name="category"
                                                placeholder="(Category)"
                                                className="form-control form-control-sm list-w-3"
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <FormBtn
                                                onClick={this.handleFormSubmit}
                                                className="form-control form-control-sm btn btn-primary list-w-3"
                                            >Add item</FormBtn>
                                        </div>
                                    </div>
                                </form>
                                <br />
                            </div>
                            {/* </div> */}
                            {/* End Add List Item */}


                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 my-3'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export default Lists;
