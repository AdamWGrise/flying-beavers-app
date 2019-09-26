import React, { Component } from 'react';
import Footer from '../components/Footer';
import { TextArea, FormBtn } from "../components/Form";
import FamilyInfoList from "../components/FamilyInfoList";
import API from "../utils/API";
import "./styles.css";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class FamilyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            familyInfos: [],
            activeCategory: "",
            activeId: "",
            dataText: "",
            lastUpdated: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // This group of functions: For Mongo connection stuff; Adam 9/19
    componentDidMount() {
        this.loadFamilyInfos();
    }

    refreshData = () => {
        API.getFamilyInfos()
        .then(res => {
            this.setState({
                familyInfos:res.data
            })
        })
    }

    loadFamilyInfos = () => {
        API.getFamilyInfos()
            .then(res => {
            this.setState({
                familyInfos: res.data,
                activeId: res.data[0]._id,
                dataText: res.data[0].dataText ? res.data[0].dataText : "",
                activeCategory: res.data[0].category,
                lastUpdated: res.data[0].lastUpdated
            })},
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        API.updateFamilyInfo({
            id: this.state.activeId,
            category: this.state.activeCategory,
            dataText: this.state.dataText,
            lastUpdated: new Date(Date.now())
        })
            .then(
                // alert("Saved!") //Replace this with an animation or something otherwise not dumb
                store.addNotification({
                    title: this.state.activeCategory,
                    message: 'Saved.',
                    type: 'success',
                    container: 'bottom-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000
                    }
                })
                )
            .then(
                this.refreshData()
            )
            .catch(err => console.log(err));
        };

    handleListClick = event => {
        this.handleFormSubmit(event)
        const datatext = event.target.getAttribute('datatext')
        const { name, value } = event.target;
        this.setState({
            activeId: value,
            activeCategory: name,
            dataText: datatext ? datatext : ""
        });
    };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h4>Family Info</h4>
                            <FamilyInfoList 
                                list={this.state.familyInfos}
                                onClick={this.handleListClick}
                            />
                        </div>
                        <div className='col-sm-8'>
                            <h5>{this.state.activeCategory}</h5>
                            <div className="card">
                                <form>
                                    <TextArea type="text"
                                    name="dataText"
                                    className="form-control form-control-sm"
                                    value={this.state.dataText ? this.state.dataText : ""}
                                    onChange={(event) => this.handleInputChange(event)}
                                    placeholder="Add notes here!"
                                    />
                                    <FormBtn
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-primary"
                                    >
                                        Save    
                                    </FormBtn>
                                    <p>Last updated: {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                        }).format(this.state.lastUpdated.toLocaleDateString)} by (INSERT NAME HERE)</p>
                                </form>
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

export default FamilyInfo
