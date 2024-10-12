import React, { Component } from 'react';

class InputControl extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleChange} 
        />
        <p>Current Input: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputControl;
