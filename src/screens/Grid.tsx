import React, { useEffect, useState } from 'react';

import './Grid.scss';
import Cell from '../components/GridCell';

const randomColor = () => Math.random() * 255;

const App = () => {
  const [
    red,
    setRed,
  ] = useState(randomColor());
  const [
    blue,
    setBlue,
  ] = useState(randomColor());
  const [
    green,
    setGreen,
  ] = useState(randomColor());

  useEffect(() => {
    const timer = setInterval(() => {
      setRed(randomColor());
      setBlue(randomColor());
      setGreen(randomColor());
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className='grid'
      style={{ backgroundColor: `rgba(${red}, ${blue}, ${green}, 0.2)` }}>
      {[...Array(600)].map((_, index) => <Cell
        color={`rgb(${red}, ${blue}, ${green})`}
        key={index}></Cell>)}
    </section>
  );
};

export default App;
