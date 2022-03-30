import React, { useState } from 'react';
import hsl2hex from 'hsl-to-hex';

import './Color.scss';

const Screen = () => {
  const [
    hue,
    setHue,
  ] = useState(180);
  const [staturation] = useState(50);
  const [
    lightness,
    setLightness,
  ] = useState(50);

  window.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    const { innerWidth: width, innerHeight: height } = window;

    setHue(Math.floor(x / width * 360));
    setLightness(Math.floor(y / height * 100));
  });

  return (
    <section
      className='color'
      style={{ backgroundColor: `hsl(${hue}, ${staturation}%, ${lightness}%)` }}>
      <div className='box'>
        <div className='info'>
          {hsl2hex(hue, staturation, lightness)}
        </div>
      </div>
    </section>
  );
};

export default Screen;
