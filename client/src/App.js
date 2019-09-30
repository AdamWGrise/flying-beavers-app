
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Calendar from './pages/Calendar';
import FamilyInfo from "./pages/FamilyInfo";
import Nav from "./components/Nav";
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import ReactNotifications from 'react-notifications-component';

function App () {
    return (
    <Router>
        <div>
            <ReactNotifications />
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lists" component={Lists} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/family-info" component={FamilyInfo} />
                <Route exact={true} path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
            </Switch>
        </div>
    </Router>
    )
}

export default App
