import React, { Component } from 'react';
import Footer from '../components/Footer';
import { TextArea, FormBtn, Input } from "../components/Form";
import FamilyInfoList from "../components/FamilyInfoList";
import API from "../utils/API";
import "./styles.css";

class FamilyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            familyInfos: [],
            activeCategory: "",
            activeId: "",
            dataText: "",
            lastUpdated: "",
            newCategory: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormSubmitCategory = this.handleFormSubmitCategory.bind(this);
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
                dataText: res.data[0].dataText,
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
            dataText: this.state.dataText,
            lastUpdated: new Date(Date.now())
        })
            .then(
                alert("Saved!") //Replace this with an animation or something otherwise not dumb
                )
            .catch(err => console.log(err));
        };

    handleFormDelete = event => {
        event.preventDefault();
        API.deleteFamilyInfo(this.state.activeId)
            .then(
                this.refreshData(),
                store.addNotification({
                    title: this.state.activeCategory,
                    message: 'Category deleted.',
                    type: 'danger',
                    container: 'bottom-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000
                    }
                })
            )
            .then(res => {
                this.setState({
                    activeCategory: "",
                    dataText: "",
                    activeId: "",
                    lastUpdated: "",
                    activeCategory: ""
                })},
                )
            .then(
                    this.refreshData()
                 )
            .catch(err => console.log(err));
        };

    handleListClick = event => {
        console.log("\n\n====handleListClick: event.target.name, event.target.value, event.target.datatext====");
        console.log(event.target.name, event.target.value, event.target.datatext);
        console.log("====Just event.target====");
        console.log(event.target);
        const { name, value, datatext } = event.target;
        this.setState({
            activeId: value,
            activeCategory: name,
            dataText: datatext
        });
    };

    handleFormSubmitCategory = event => {
        event.preventDefault();
        if (this.state.newCategory) {
            API.newFamilyInfo({
                category: this.state.newCategory,
                dataText: "(Enter data here)"
            })
                .then(res => this.loadFamilyInfos())
                .catch(err => console.log(err));
        }
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
                            <br />
                            <form>
                                <Input
                                    className="form-control list-input-1 form-control-sm"
                                    onChange={this.handleInputChange}
                                    value={this.state.newCategory}
                                    name="newCategory"
                                    placeholder="Add a new category"
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmitCategory}
                                    className="form-control form-control-sm btn btn-primary list-submit-btn"
                                >
                                    Add category
                                    </FormBtn>
                            </form>
                        </div>
                        <div className='col-sm-8'>
                            <h5>{this.state.activeCategory}</h5>
                            <div className="card">
                                <form>
                                    <TextArea type="text"
                                    value={this.state.dataText}
                                    onChange={this.handleInputChange}
                                    className="form-control form-control-sm"
                                    />
                                    <span>
                                    <FormBtn
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-primary"
                                    >
                                        Save    
                                    </FormBtn>
                                    </span>
                                    <span className="right">
                                    <FormBtn
                                        onClick={this.handleFormDelete}
                                        className="btn btn-danger"
                                    >
                                        Delete    
                                    </FormBtn>
                                    </span>
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
