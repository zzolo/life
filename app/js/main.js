/**
 * Main JS file.
 */

import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './js-build/app/app.js';
import Welcome from './js-build/welcome/welcome.js';
import Settings from './js-build/settings/settings.js';

// Render main content
// hashHistory works better with electron
render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Welcome } />

      <Route path="settings" component={ Settings } />

      <Route path="*" component={ Welcome } />
    </Route>
  </Router>,
  document.querySelector('#life')
);
