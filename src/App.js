import React, { useState } from 'react';
import EuroNum from './components/euromaschine';
// import NameForm from './components/input';
// import numInput from './components/_numberInput';
import SomeNumber from './components/rowInput';

import './App.css';

function App(props) {
  return (
    <div>
      <EuroNum />

      <SomeNumber text='sometext' />
    </div>
  );
}

export default App;
