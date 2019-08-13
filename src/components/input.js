import React, { Component } from 'react';
let horst = null;

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    horst = this.state.value;
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
        {this.state.value}
        <br />
        {horst}
      </div>
    );
  }
}

export default NumberInput;
