import React, { Component } from 'react';
import Metronome from '../shared/Metronome';

class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Home</h1>
        <Metronome bpm={100} />
      </div>
    );
  }
}

export default Home;
