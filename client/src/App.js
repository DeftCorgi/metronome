import React, { Component } from 'react';
import Content from './shared/Content';
import Navbar from './shared/Navbar';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content>{this.props.children}</Content>
      </div>
    );
  }
}

export default App;
