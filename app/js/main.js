/**
 * Main JS file.
 */

import React from 'react';
import { render } from 'react-dom';

render(
  <div class="welcome">
    <div class="welcome-box">
      <h1>Life</h1>
      <p><span class="loading"></span></p>
    </div>
  </div>,
  document.querySelector('#life')
);
