import React, { Component } from 'react';
import './../App.css';

class Grid extends Component {
  constructor(props) {
      super(props);

      this.state = {
        numWidth: 0,
        numHeight: 0
      }
    }

  generateSquares(){
    return(
      <div className="main-grid">

      </div>
    );
  }
  render() {
    return (
      <div className="grid">
        <div className="grid-setup">
          <p className="grid-controllers">
            <label for="width-controller">Width </label>
            <input type="text" name="width-controller" id="width-controller" />
            <label for="height-controller">Height </label>
            <input type="text" name="height-controller" id="height-controller" />
            <button type="button" name="controller-generate" id="controller-generate">MAKE GRID</button>
          </p>
          <div className="grid-setup">
            {this.generateSquares()}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
