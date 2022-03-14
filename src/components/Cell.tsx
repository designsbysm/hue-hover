import React, { ReactNode, useState } from 'react';

import './Cell.scss';

const App = ({ children, color }: Props) => {
  const [
    hover,
    setHover,
  ] = useState(false);

  return <div
    className={hover ? 'cell current' : 'cell'}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{ backgroundColor: color }}>
    {children}
  </div >;
};

type Props = {
  color?: string
  children?: ReactNode;
}
export default App;
