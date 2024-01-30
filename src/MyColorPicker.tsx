import React from 'react';
import { CustomPicker } from 'react-color';
import { SketchPicker } from 'react-color';

class MyColorPicker extends React.Component {
  state = {
    background: '#fff'
  }; 
  handleChangeComplete = (color: any)=>{
    this.setState({bacground: color.hex});
  };
  render() {
    // return <div>MyColorPicker</div>;
    return (<SketchPicker
    color={this.state.background}
    onChangeComplete = {this.handleChangeComplete} />);
  }
}

export default CustomPicker(MyColorPicker);