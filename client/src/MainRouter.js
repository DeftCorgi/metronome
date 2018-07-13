import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={Home} />
          <Route exact path="/about" component={Home} />
        </App>
      </Router>
    );
  }
}

export default MainRouter;
