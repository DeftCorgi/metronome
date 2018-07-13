import React, { Component } from 'react';
import axios from 'axios';

export default class Cats extends Component {
  state = { cats: [] };

  async componentDidMount() {
    // load cats
    const res = await axios.get('/api/cats');
    const cats = res.data.cats;
    this.setState({ cats });
  }

  render() {
    const cats = this.state.cats;
    return cats.map(cat => <div key={cat}>{cat}</div>);
  }
}
