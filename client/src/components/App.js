import React, { Component } from 'react';
import './App.scss';
import Movies from './Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
