import React, { Component } from 'react';
import ContentBlock from '../components/ContentBlock';
// import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Icons from '../components/Icons';

class Home extends Component {
    state = {
        activePageTitle: 'Home'
    };


    render() {
        return (
            <div>
            <div id='content'>
                <div className='container'>

                    

           <div> 
                 
           <div className='row'>   
                <span className="dotOne"></span>
                <span className="dotTwo"></span>
                <span className="dotThree"></span>
                <span className="dotFour"></span>
            </div>
            </div>
                        
              
                  
                    <div className='row'>
                        <div className='col'>
                            <ContentBlock
                               heading1="You spend time with family,"
                               heading2="we'll take care of the organizing." 
                               paragraph='When parents are torn betweeen work and family its hard to stay organized.
                               With so many schedules, time is wasted trying to keep family life organized and everyone on thee same page. 
                               Flying beavers has created a virtual app so flying beavers can do the organizing for you. 
                               We keep the calenders, shopping lists, and family info organized for you so effiency is right at your finger tips!'
                            />
                        </div>
                    </div>
                

            <Icons />
                <br>
                </br>
                <Footer />
                </div>
                </div>
                </div>
                
    
        )
    }
};
        


export default Home;
