import React, { Component } from 'react';
import './../App.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorcode: "#ffffff"
    }

    this.onChangeColor = this.onChangeColor.bind(this);
  }

  componentWillMount(){
    let startcolor = this.getRandomColor();

    this.setState({colorcode: startcolor});

    this.props.onDefaultColor(startcolor);
  }

  onChangeColor(e){
    let newcolor = e.target.value;

    this.setState({colorcode: newcolor});
    this.props.onChange(newcolor);
  }

  //In case we need to start with a random color just for the kicks
  getRandomColor() {
  	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
  	  color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
  }

  render() {

    return (
      <div className="color-picker" id="color-picker">
          <input type="color" name="colorpicker" id="colorpicker" value={this.state.colorcode} onChange={(...args) => this.onChangeColor(...args)} />
      </div>
    );
  }
}

export default ColorPicker;
