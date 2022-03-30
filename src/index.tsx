import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Color from './screens/Color';
// import Grid from './screens/Grid';

ReactDOM.render(
  <React.StrictMode>
    <Color />
    {/* <Grid /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
