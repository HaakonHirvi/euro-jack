import React, { useState } from 'react';
import SingleRow from './singleRow';

const SomeInput = () => {
  const [calculation, setCalculation] = useState();
  const [number, setNumber] = useState();

  const numberHandler = event => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const addNumber = event => {
    event.preventDefault();

    setNumber('');
  };

  const numCalculation = num => {
    let rows = [];
    // const checkNum = isNumber(num);
    let numI = Number(num);
    console.log(typeof num);
    if (numI < 1 || isNaN(num)) {
      return (
        <div className='alertContainer'>
          <h5>
            Sorry we couldn't work with this input. Please enter a number.
          </h5>
        </div>
      );
    } else {
      for (let i = 0; i < numI; i++) {
        rows.push(
          <div className='containerRows'>
            <SingleRow />
          </div>
        );
      }
      return (
        <div className='container'>
          <h5>{num} rows of lucky numbers</h5>
          <div>{rows}</div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className='container'>
        <h3>Number of Rows</h3>
        <p>Please enter a number</p>
        <form onSubmit={addNumber}>
          <input value={number} onChange={numberHandler} />
          <button
            className='clicker'
            type='submit'
            onClick={() => setCalculation(numCalculation(number))}>
            submit
          </button>
        </form>
      </div>

      {calculation}
    </div>
  );
};

export default SomeInput;
