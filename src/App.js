import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Users from "./components/pages/Users";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Admin" exact component={Admin} />
                        <Route path="/Users" exact component={Users} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
