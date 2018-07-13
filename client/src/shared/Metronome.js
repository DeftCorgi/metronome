import React, { Component } from 'react';
import Octicon from 'react-component-octicons';
import '../styles/metronome.css';

class Metronome extends Component {
  render() {
    return (
      <div className="Metronome">
        <header className="MetronomeHeader">
          {this.props.song || 'Custom bpm'}
        </header>
        <section className="MetronomeBody">
          <div className="BpmDisplay">
            {this.props.bpm} <span className="Bpm">BPM</span>
          </div>
          <button className="BpmControlButton pull-right BpmPlayButton">
            <Octicon name="triangle-right" zoom="50%" />
          </button>
          <div className="BpmControls">
            <button className="BpmControlButton">
              <span className="IconWrapper">
                <Octicon name="dash" />
              </span>
            </button>
            <input className="BpmSlider" type="range" min={0} max={300} />
            <button className="BpmControlButton">
              <span className="IconWrapper">
                <Octicon name="plus" />
              </span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Metronome;
