import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { NotFound, LoginPage, DashboardPage } from './pages'

import PrivateRoute from './PrivateRoute/private-route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
