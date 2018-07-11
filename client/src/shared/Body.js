import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// contexts
import Cats from '../contexts/Cats';

export default class extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Cats} />
      </Switch>
    );
  }
}
