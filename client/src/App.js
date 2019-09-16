import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Nav from "./components/Nav";

function App() {
  return (
    <Lists />
    
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/lists" component={Lists} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
