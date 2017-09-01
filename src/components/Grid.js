import React, { Component } from 'react';
import _ from 'lodash';
import './../App.css';

class Grid extends Component {
  constructor(props) {
      super(props);

      this.state = {
        numWidth: 0,
        numHeight: 0
      }
    }

  onGenerate(e){
    let wvalue = this.refs.widthcontroller.value;
    let hvalue = this.refs.heightcontroller.value;

    if(!_.isEmpty(wvalue)){
      this.setState(prevState =>{
        prevState.numWidth = wvalue;

        return prevState;
      });
    }

    if(!_.isEmpty(hvalue)){
      this.setState(prevState =>{
        prevState.numHeight = hvalue;

        return prevState;
      });
    }

    console.log(this.state.numHeight);
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
          <div className="grid-controllers">
            <label htmlFor="width-controller">Width </label>
            <input type="text" name="width-controller" ref="widthcontroller" id="width-controller" />
            <label htmlFor="height-controller">Height </label>
            <input type="text" name="height-controller" ref="heightcontroller"  id="height-controller" />
            <button type="button" name="controller-generate" id="controller-generate" onClick={(...args) => this.onGenerate(...args)}>MAKE GRID</button>
          </div>
          <div className="grid-setup">
            {this.generateSquares()}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
