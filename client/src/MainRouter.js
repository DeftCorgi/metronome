import React, { Component } from 'react';
import Cats from './contexts/Cats';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class MainRouter extends Component {
  state = {
    navOpenState: {
      isOpen: false,
      width: 304
    }
  };

  onNavResize = navOpenState => {
    this.setState({ navOpenState });
  };

  render() {
    return (
      <Router>
        <App>
          <Route path="/" component={Cats} />
        </App>
      </Router>
    );
  }
}

export default MainRouter;
