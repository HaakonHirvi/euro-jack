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
  const [userAlert, setUserAlert] = useState();

  const numCalculation = num => {
    let rows = [];
    // const checkNum = isNumber(num);
    let numI = Number(num);
    console.log(typeof num);
    if (numI < 1 || isNaN(num)) {
      setUserAlert(
        <div className='alertContainer'>
          <h4>
            Sorry we couldn't work with this input. Please enter a number.
          </h4>
        </div>
      );
      setTimeout(() => {
        setUserAlert(null);
      }, 2500);
    } else if (numI > 99) {
      setUserAlert(
        <div className='alertContainer'>
          <h4>
            Your number {numI} is to big. Please select a number smaller than
            100.
          </h4>
        </div>
      );
      setTimeout(() => {
        setUserAlert(null);
      }, 4000);
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
          <h4>Your {num} rows EURO JACKPOT - lucky numbers</h4>
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
      {userAlert}

      {calculation}
    </div>
  );
};

export default SomeInput;
