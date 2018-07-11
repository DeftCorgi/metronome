import React, { Component } from 'react';
import Body from './shared/Body';
import Navbar from './shared/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
