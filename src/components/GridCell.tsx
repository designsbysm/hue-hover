import React, { ReactNode, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './GridCell.scss';

const App = ({ children, color }: Props) => {
  const [
    hover,
    setHover,
  ] = useState(false);

  const styles = useSpring({
    backgroundColor: color,
    borderRadius: '10vh',
    config: {
      friction: 5,
      mass: 5,
      tension: 1000,
    },
    opacity: hover ? 1 : 0,
  });

  return <animated.div
    className='cell'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={styles}>
    {children}
  </animated.div >;
};

type Props = {
  color?: string
  children?: ReactNode;
}
export default App;
