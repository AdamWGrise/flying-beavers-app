import React, { Component } from 'react';
import Footer from '../components/Footer';
import API from "../utils/API";
import "./styles.css";
import { TextArea, FormBtn } from '../components/Form';

class FamilyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            familyInfos: [],
            activeCategory: "",
            activeId: "",
            information: "",
            lastUpdated: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // This group of functions: For Mongo connection stuff; Adam 9/19
    componentDidMount() {
        this.loadFamilyInfos();
    }

    loadFamilyInfos = () => {
        API.getFamilyInfos()
            .then(res => {
            this.setState({
                familyInfos: res.data,
                activeId: res.data[0]._id,
                information: res.data[0].dataText,
                activeCategory: res.data[0].category,
                lastUpdated: res.data[0].lastUpdated
            })},
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.updateFamilyInfo({
            id: this.state.activeId,
            category: this.state.activeCategory,
            dataText: this.state.information,
            lastUpdated: new Date(Date.now())
        })
            .then(
                this.loadFamilyInfos(),
                alert("Saved!") //Replace this with an animation or something otherwise not dumb
                )
            .catch(err => console.log(err));
        };

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h4>Family Info</h4>
                            <div className="card">
                                (List categories here to select from - "Members" is default)
                            </div>
                        </div>
                        <div className='col-sm-8'>
                            <h5>{this.state.activeCategory}</h5>
                            <div className="card">
                                <form>
                                    <TextArea type="text"
                                    value={this.state.information}
                                    onChange={this.handleInputChange}
                                    name="information"
                                    className="form-control form-control-sm"
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
