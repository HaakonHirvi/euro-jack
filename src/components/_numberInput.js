import React, { useState } from 'react';

const NumberInput = props => {
  const [numberState, newNumberState] = useState({
    value: '2'
  });
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);

  const handleChange = event => {
    newNumberState({ value: event.target.value });
  };

  const handleSubmit = event => {
    console.log('A name was submitted: ' + numberState.value);
    event.preventDefault();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={newNumberState.value}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      {numberState.value}
    </div>
  );
};

export default NumberInput;
