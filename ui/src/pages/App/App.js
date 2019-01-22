import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Console from '../Console/Console';
import './App.css';

const Index = () => <h2>Index</h2>;
const Docs = () => <h2>Docs</h2>;
const NotFound = () => <h2>Not Found</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/console/">Administration Console</Link>
                </li>
                <li>
                  <Link to="/docs/">Documentation</Link>
                </li>
                <li>
                  <a href="https://github.com/femto-host/auth-o">Report an Issue</a>
                </li>
              </ul>
            </nav>
            
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/console/" component={Console} />
              <Route path="/docs/" component={Docs} />
              <Route component={NotFound} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
