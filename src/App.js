import React, { Component } from 'react';
import logo from './log.svg';
import Grid from './components/Grid.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Abstract Squares</h2>
        </div>
        <p className="App-intro">
          Define the size of your grid, then click on the squares you want to fill with your favorite color.
        </p>

        <p>
          <Grid />
        </p>

        <p>
          Once you are done save your grid as an image.
        </p>
      </div>
    );
  }
}

export default App;
