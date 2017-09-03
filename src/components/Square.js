import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../App.css';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transparency: 0,
      timer: ""
    }

    this.onPressSquare = this.onPressSquare.bind(this);
    this.onReleaseSquare = this.onReleaseSquare.bind(this);
    this.startPress = this.startPress.bind(this);
  }

  componentWillMount(){
    if(this.props.clear){
      this.setState({transparency: 0});
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clear){
      this.setState({transparency: 0});
      console.log("nextProps.clear " + nextProps.clear);
      // this.props.resetFill;
    }
  }

  startPress(){
    if(this.state.transparency >= 0 && this.state.transparency <= 1){
      this.setState(prevState =>{
        prevState.transparency += 1 * 0.01;

        return prevState;
      });
    }
  }

  onPressSquare(e){
    // console.log("Mouse Down");
    let tim = setInterval(this.startPress, 30);
    this.setState({timer: tim});

  }

  onReleaseSquare(e){
    // console.log("Mouse Up");
    clearInterval(this.state.timer);
    console.log(this.state.transparency);
  }

  isSquareFilled(){
    let phil;
    if(this.props.clear){
      phil = 0;
    }else{
      phil = this.state.transparency;
    }

    let fillstyle = {
      backgroundColor: "rgba(102, 102, 102,"+ phil +")"
    }

    return fillstyle;
  }

  render() {
    return (
      <div style={this.isSquareFilled()} id={this.props.cred} className={this.props.type} onMouseDown={(...args) => this.onPressSquare(...args)} onMouseUp={(...args) => this.onReleaseSquare(...args)} >

      </div>
    );
  }
}

export default Square;
