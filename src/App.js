import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NotFound } from './pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/*add routes*/}
            <Route component={() => <NotFound />} />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
