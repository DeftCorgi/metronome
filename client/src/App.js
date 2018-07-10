import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = { cats: [] };

  async componentDidMount() {
    // load cats
    const res = await axios.get('/api/cats');
    const cats = res.data.cats;
    this.setState({ cats });
  }

  render() {
    const cats = this.state.cats;
    return (
      <div className="App">
        <h1>App</h1>
        {cats.map(cat => <div key={cat}>{cat}</div>)}
      </div>
    );
  }
}

export default App;
