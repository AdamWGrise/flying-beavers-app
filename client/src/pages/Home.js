import React, { Component } from 'react';
import ContentBlock from '../components/ContentBlock';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Icons from '../components/Icons';

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
                               heading="You spend time with family,"
                               heading2="we'll take care of the organizing" 
                               paragraph='When families are on the go it can be challenging to stay organized 
                               Time is wasted when trying to link schedules, calendars, lists, tasks which ends up being ineffective. 
                               Flying beavers simplifies the family life so you can spend more time together, and less time organizing. 
                               Flying beavers syncs all the important household information so everyone can always stay on the same page!'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <br>
                    </br>
                    <Icons/> 
                </div>
                <br>
                </br>
                <Footer />
            </div>
        );
    }
}

export default Home;
