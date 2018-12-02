import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NotFound, LoginPage } from './pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
