import React from 'react';
import SingleRow from './singleRow';

const numberRows = () => {
  let rows = [];
  //   let numI = {props.}
  for (let i = 0; i < 6; i++) {
    rows.push(<SingleRow />);
  }
  return <div>{rows}</div>;
};

export default numberRows;
