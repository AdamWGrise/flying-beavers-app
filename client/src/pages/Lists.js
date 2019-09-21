import React, { Component } from 'react';
// import API from '../utils/API';
import Footer from '../components/Footer';
import ContentPanel from '../components/ContentPanel';
import ListClick from '../components/ListClick';
import Jumbotron from '../components/Jumbotron';

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
        activePageTitle: 'Lists'
    };

    handleListClick = (event) => {
        console.log('CLICKY');
        event.preventDefault();
        this.setState({
            activeListId: event.target.value
        });
    }

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
