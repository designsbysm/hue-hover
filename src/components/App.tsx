import React from 'react';

import './App.scss';
import Cell from './Cell';

const App = () => {
  return <section className='grid'>
    {[...Array(400)].map((_, index) => <Cell
      color={'rgb(255,0,0)'}
      key={index}>{index + 1}</Cell>)}
  </section >;
};

export default App;
