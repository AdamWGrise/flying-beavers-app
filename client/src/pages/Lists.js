import React, { Component } from 'react';
import Footer from '../components/Footer';
import ContentPanel from '../components/ContentPanel';
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from '../components/Jumbotron';
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
            .then(res => this.setState({ shopItems: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteShopItem = id => {
        console.log("clicky delete");
        API.deleteShopItem(id)
            .then(res => this.loadShopItems())
            .catch(err => console.log(err));
    };

    starShopItem = id => {
        console.log("clicky update");
        API.starShopItem(id)
            .then(res => this.loadShopItems())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("clicky create");
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
        }
    };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <select>
                                {this.state.shopItems.map(shopItem => (
                                    <option key={shopItem._id} value={shopItem.category}>
                                        {shopItem.category}
                                    </option>
                                ))}
                            </select>
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
                                        value={this.state.newItem}
                                        onChange={this.handleInputChange}
                                        name="newItem"
                                        placeholder="Add an item:"
                                        className="form-control list-input-1 form-control-sm"
                                    />
                                    {/* <Input
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
                                    /> */}
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
}

export default Lists
