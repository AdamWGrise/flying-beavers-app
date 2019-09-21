import React, { Component } from 'react';
import Footer from '../components/Footer';
import ContentPanel from '../components/ContentPanel';
import ListClick from '../components/ListClick';
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";

class Lists extends Component {
    constructor(props) {
        super(props)
        this.handleListClick = this.handleListClick.bind(this);
    }
    state = {
        activeListId: 0,
        // testLists is providing test data until we are hooked up to the database.
        testLists: [
            { title: 'HyVee', items: ['Apples', 'Bananas', 'Blueberries', 'Pineapples', 'Kiwi', 'Plums'] },
            { title: 'Costco', items: ['Tissues', 'Cereal', 'Dog Food', 'Toothpaste', 'Vitamins'] },
            { title: 'Another List', items: ['Hey', 'Hey', 'hey'] }
        ],
        activePageTitle: 'Lists',
        // Below: Adding items for db parts of state
        shopItems: [],
        shoppingList: "",
        itemName: "",
        category: "",
        quantity: "",
        quantityUnits: ""
    };

    handleListClick = (event) => {
        console.log('CLICKY');
        event.preventDefault();
        this.setState({
            activeListId: event.target.value
        });
    }

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

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    };

    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.shoppingList && this.state.itemName && this.state.quantity && this.state.quantityUnits) {
        API.saveShopItem({
        shoppingList: this.state.shoppingList,
        category: this.state.category,
        itemName: this.state.itemName,
        quantity: this.state.quantity,
        quantityUnits: this.state.quantityUnits,
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
                        <div className='col-sm'>
                            <Jumbotron pageName={this.state.activePageTitle} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-3 my-3'>
                            <ListClick
                                activeListId={this.state.activeListId}
                                handleListClick={this.handleListClick}
                                testLists={this.state.testLists}
                            />
                        </div>
                        <div className='col-sm-9 my-3'>
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

                    <p>(Original test area below - remove before go-live)</p>
                    <div className='row'>
                        <div className='col-sm-3 my-3'>
                            <ListClick
                                activeListId={this.state.activeListId}
                                handleListClick={this.handleListClick}
                                testLists={this.state.testLists}
                            />
                        </div>
                        <div className='col-sm-9 my-3'>
                            <ContentPanel
                                activeListId={this.state.activeListId}
                                testLists={this.state.testLists}
                            />
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
