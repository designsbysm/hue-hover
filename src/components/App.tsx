import React from 'react';

import './App.scss';
import Cell from './Cell';

const App = () => {
  return <section
    className='grid'
    style={{ backgroundColor: 'rgba(255, 0, 0,0.2)' }}>
    {[...Array(600)].map((_, index) => <Cell
      color={'rgb(255, 0, 0)'}
      key={index}></Cell>)}
  </section >;
};

export default App;
