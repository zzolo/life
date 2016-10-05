/**
 * Main JS file.
 */

import { render } from 'react-dom';
import { Router, Route, DefaultRoute, IndexRoute, hashHistory, transitionTo } from 'react-router';

import App from './js-build/app/app.jsx.js';
import Welcome from './js-build/welcome/welcome.jsx.js';
import Settings from './js-build/settings/settings.jsx.js';
import config from './js-build/settings/settings.js';

// Middleware for router.  Reroute to settings if
// setttings don't exist.
function settingsHandler(nextState, replaceState) {
  if (!config.loaded()) {
    replaceState({
      pathname: "settings",
    });
  }
};

// Render main content
// hashHistory works better with electron
render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Welcome } onEnter={ settingsHandler } />

      <Route path="settings" component={ Settings } />

      <Route path="*" component={ Welcome } onEnter={ settingsHandler } />
    </Route>
  </Router>,
  document.querySelector('#life')
);
