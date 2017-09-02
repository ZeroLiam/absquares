import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../App.css';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numWidth: 0,
      numHeight: 0,
      showGrid: false
    }

    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onGenerate = this.onGenerate.bind(this);
  }

  onChangeWidth(e) {
    let wvalue = e.target.value;
    if(wvalue > 0){
      this.setState({
        numWidth: wvalue
      });
      // this.validateSize(wvalue);
    }else{
      this.setState({
        showGrid: false
      });
    }
  }

  onChangeHeight(e) {
    let hvalue = e.target.value;
    if(hvalue > 0 ){
      this.setState({
        numHeight: hvalue
      });
      // this.validateSize(hvalue);
    }else{
      this.setState({
        showGrid: false
      });
    }
  }

  onGenerate(e) {
    let hvalue = this.state.numHeight;
    let wvalue = this.state.numWidth;

    if (hvalue > 0 && wvalue > 0){
      this.setState({
        showGrid: true
      });
    }
  }

  onDelete(e) {
    this.setState({
      showGrid: false
    });

    $("#width-controller").val("");
    $("#height-controller").val("");
  }


  validateSize(numInput){
    let hvalue = this.state.numHeight;
    let wvalue = this.state.numWidth;
    let validation = /^\d+$/g;

    if(validation.test(numInput) && (hvalue > 0 && wvalue > 0)){
      return true;
    }else{
      return false;
    }
  }

  generateSquares() {
      let rn = this.state.numWidth;
      let cn = this.state.numHeight;

      //Let's make the floor!
      //Rows
      let floor = ((rows, i, len) => {
          while (++i <= len) {
            let name = "row-" + i;

            rows.push( <div id ={name} key={i} className="rowx"> {
                //Columns
                ((cols, x, ln) => {
                    while (++x <= ln) {
                      let nae = "col-" + x;

                      cols.push( <div id = {nae} key={x} className="colx"></div>);
                      }
                      return cols;
                    })([], 0, cn)

                } </div>);
              }
              return rows;
            })([], 0, rn);

          return floor;
        }
        render() {
          return (
            <div className="grid">
              <div className="grid-setup">
                <div className="grid-controllers">
                  <label htmlFor="width-controller">Width </label>
                  <input type="number" name="width-controller" id="width-controller" onChange={(...args) => this.onChangeWidth(...args)} />
                  <label htmlFor="height-controller">Height </label>
                  <input type="number" name="height-controller" id="height-controller"  onChange={(...args) => this.onChangeHeight(...args)}  />
                  <button type="button" name="controller-generate" id="controller-generate" onClick={(...args) => this.onGenerate(...args)}>MAKE GRID</button>
                  <button type="button" name="controller-delete" id="controller-delete" onClick={(...args) => this.onDelete(...args)}>CLEAR GRID</button>
                </div>
                <div className="grid-setup">
                  <div className="main-grid" style={{display: this.state.showGrid ? 'block' : 'none' }}>
                      {this.generateSquares()}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }

      export default Grid;
