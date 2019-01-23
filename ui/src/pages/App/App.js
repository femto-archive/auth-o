import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

const Index = () => <h2>Index</h2>;
const Docs = () => <h2>Docs</h2>;
const NotFound = () => <h2>Not Found</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/docs/" component={Docs} />
          <Route path="/admin/" component={Dashboard}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
