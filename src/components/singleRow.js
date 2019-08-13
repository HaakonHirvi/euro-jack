import React from 'react';

function randomN(arr) {
  const numb = Math.floor(Math.random() * 50 + 1);
  if (arr.includes(numb)) {
    randomN(arr);
  } else {
    arr.push(numb);
  }
  return arr;
}
function randomTwo(arr2) {
  const numb2 = Math.floor(Math.random() * 10 + 1);
  if (arr2.includes(numb2)) {
    randomTwo(arr2);
  } else {
    arr2.push(numb2);
  }
  return arr2;
}

const singleRow = () => {
  const euroArray = [];
  for (let i = 0; i < 5; i++) {
    randomN(euroArray);

    euroArray.sort((a, b) => a - b);
    console.log(euroArray);
  }
  const starNum = [];
  for (let i = 0; i < 2; i++) {
    randomTwo(starNum);

    starNum.sort((a, b) => a - b);
  }
  return (
    <div className='inlineContainer'>
      {euroArray.map((el, i) => (
        <div key={i} className='inline'>
          {el}
        </div>
      ))}
      <div className='inline'>Star Numbers</div>
      {starNum.map((num, i) => (
        <div key={i} className='inline'>
          {num}
        </div>
      ))}
    </div>
  );
};

export default singleRow;
