import React, { Component } from 'react';
import $ from 'jquery';
import Square from './Square';
import ColorPicker from './ColorPicker';
import './../App.css';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numWidth: 0,
      numHeight: 0,
      customcolor: "",
      gridbuttontxt: "MAKE GRID",
      showGrid: false,
      clearGrid: true
    }

    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onGenerate = this.onGenerate.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onChangeWidth(e) {
    let wvalue = e.target.value;

    if(wvalue > 0){
      this.setState({
        numWidth: wvalue
      });
    }else{
      this.setState({
        showGrid: false
      });
    }
  }

  onChangeHeight(e) {
    let hvalue = e.target.value;
    if(hvalue > 0){
      this.setState({
        numHeight: hvalue
      });
    }else{
      this.setState({
        showGrid: false
      });
    }
  }

  onGenerate(e) {
    let hvalue = this.state.numHeight;
    let wvalue = this.state.numWidth;

    if ((hvalue > 0 && wvalue > 0) && this.state.clearGrid){
      this.setState({
        clearGrid: false,
        showGrid: true,
        gridbuttontxt: "CLEAR GRID"
      });
    }else{
      this.setState({
        clearGrid: true,
        gridbuttontxt: "MAKE GRID"
      });

    }
  }

  onDelete(e) {
    this.setState({
      showGrid: false,
      clearGrid: true
    });

    $("#width-controller").val("");
    $("#height-controller").val("");
  }

  onClear(e) {
    this.setState({
      clearGrid: true
    });
  }

  onChangeColor(e) {
    this.setState({
      customcolor: e
    });
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

                      cols.push( <Square cred={nae} key={x} type="colx" clear={this.state.clearGrid} color={this.state.customcolor} />);
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
                  <ColorPicker onDefaultColor={(...args) => this.onChangeColor(...args)} onChange={(...args) => this.onChangeColor(...args)} />
                  <input type="number" min="1" max="20" name="width-controller" id="width-controller" onChange={(...args) => this.onChangeWidth(...args)} placeholder="Width" />
                  <input type="number" min="1" max="20" name="height-controller" id="height-controller" onChange={(...args) => this.onChangeHeight(...args)} placeholder="Height" />
                  <button type="button" name="controller-generate" id="controller-generate" className={this.state.clearGrid ? "controller-generate" : "controller-clear"} onClick={(...args) => this.onGenerate(...args)}>{this.state.gridbuttontxt}</button>
                  <button type="button" name="controller-delete" id="controller-delete" onClick={(...args) => this.onDelete(...args)}>DELETE</button>
                </div>
              </div>

              <div className="grid-setup">

              <div className="main-grid" style={{display: this.state.showGrid ? 'block' : 'none' }}>
                  {this.generateSquares()}
              </div>
              </div>
            </div>
          );
        }
      }

      export default Grid;
