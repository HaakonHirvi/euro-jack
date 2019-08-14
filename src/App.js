import React, { useState } from 'react';
import EuroNum from './components/euromaschine';
// import NameForm from './components/input';
// import numInput from './components/_numberInput';
import LuckyNumber from './components/luckyNumber';

import './App.css';

function App() {
  return (
    <div>
      <EuroNum />

      <LuckyNumber />
    </div>
  );
}

export default App;
