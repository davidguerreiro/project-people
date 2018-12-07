import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';
import Home from './views/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div className="App">
          <Route exact path="/" component={ Home } />
        </div>
      </Router>
    );
  }
}

App.PropTypes = {
  history: PropTypes.any.isRequired,
};

export default App;
