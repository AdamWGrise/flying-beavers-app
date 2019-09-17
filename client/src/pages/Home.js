import React, { Component } from 'react';
import ContentBlock from '../components/ContentBlock';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

class Home extends Component {
    state = {
        activePageTitle: 'Home'
    };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Carousel />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <ContentBlock
                                heading='Manage Your Family'
                                paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis odio mi'
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
