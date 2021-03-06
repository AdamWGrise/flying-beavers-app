
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Calendar from "./pages/Calendar";
import FamilyInfo from "./pages/FamilyInfo";
import Nav from "./components/Nav";
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import ReactNotifications from 'react-notifications-component';


class App extends React.Component {
  constructor(props) {
    console.log(" Calendar page: * * * CalendarPage constructor");
    super(props)
    this.state = {
      sign: false,
      events: []
    };
  }

  onEvents = (events) => {
    console.log('onEvents:', events);
    this.setState({ events });
  }
  signUpdate = (sign) => {
    this.setState({sign});
    if (sign === false) {
      this.setState({events: []});
    }
  }
  render() {
    return (
      <Router>
        <div>
          <ReactNotifications />
          <Nav />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={Lists} />
            <Route
              path='/calendar'
              render={(props) => <Calendar sign={this.state.sign} events={this.state.events} onEvents = { this.onEvents } isAuthed={true} />}
            />
            <Route exact path="/family-info" component={FamilyInfo} />

           
            <Route
              exact={true}
              path='/Login'
              render={(props) => <Login sign={this.state.sign} signUpdate={this.signUpdate} onEvents = { this.onEvents }/>}
            />          
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
