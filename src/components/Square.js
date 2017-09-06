import React, { Component } from 'react';
import './../App.css';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "102, 102, 102,",
      transparency: 0,
      timer: ""
    }
    this.onPressSquare = this.onPressSquare.bind(this);
    this.onReleaseSquare = this.onReleaseSquare.bind(this);
    this.startPress = this.startPress.bind(this);
  }

  componentWillMount() {
    // let getNewColor = this.convertCustomColor(this.props.color);
    // this.setState({color: getNewColor});

    if (this.props.clear) {
      this.setState({transparency: 0});
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clear) {
      this.setState({
        transparency: 0
      });
    }

      // let getNewColor = this.convertCustomColor(nextProps.color);
      // this.setState({color: getNewColor});
  }


  //To change the hexadecimal input color to RGBA
  convertCustomColor(value){
    let components = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
    let customColorR = parseInt(components[1], 16);
    let customColorG = parseInt(components[2], 16);
    let customColorB = parseInt(components[3], 16);

    let colorTotal = customColorR + "," + customColorG + "," + customColorB + ",";

    return colorTotal;
  }

  startPress() {
    if (this.state.transparency >= 0 && this.state.transparency <= 1) {
      this.setState(prevState => {
        prevState.transparency += 1 * 0.01;

        return prevState;
      });
    }
  }

  onPressSquare(e) {
    let tim = setInterval(this.startPress, 15);
    this.setState({
      color: this.convertCustomColor(this.props.color),
      timer: tim
    });

  }

  onReleaseSquare(e) {
    clearInterval(this.state.timer);
  }

  render() {
    let fillstyle = {
      backgroundColor: "rgba(" + this.state.color + this.state.transparency + ")"
    }

    return (
      <div
        style={fillstyle}
        id={this.props.cred}
        className={this.props.type}
        onMouseDown={(...args) => this.onPressSquare(...args)}
        onMouseUp={(...args) => this.onReleaseSquare(...args)} >

      </div>
    );
  }
}

export default Square;
