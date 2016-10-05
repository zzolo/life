'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _appJsx = require('./js-build/app/app.jsx.js');

var _appJsx2 = _interopRequireDefault(_appJsx);

var _welcomeJsx = require('./js-build/welcome/welcome.jsx.js');

var _welcomeJsx2 = _interopRequireDefault(_welcomeJsx);

var _settingsJsx = require('./js-build/settings/settings.jsx.js');

var _settingsJsx2 = _interopRequireDefault(_settingsJsx);

var _settings = require('./js-build/settings/settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Middleware for router.  Reroute to settings if
// setttings don't exist.
/**
 * Main JS file.
 */

function settingsHandler(nextState, replaceState) {
  if (!_settings2.default.loaded()) {
    replaceState({
      pathname: "settings"
    });
  }
};

// Render main content
// hashHistory works better with electron
(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _appJsx2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _welcomeJsx2.default, onEnter: settingsHandler }),
    _react2.default.createElement(_reactRouter.Route, { path: 'settings', component: _settingsJsx2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _welcomeJsx2.default, onEnter: settingsHandler })
  )
), document.querySelector('#life'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL21haW4uanMiXSwibmFtZXMiOlsic2V0dGluZ3NIYW5kbGVyIiwibmV4dFN0YXRlIiwicmVwbGFjZVN0YXRlIiwibG9hZGVkIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBYkE7Ozs7QUFjQSxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0MsWUFBcEMsRUFBa0Q7QUFDaEQsTUFBSSxDQUFDLG1CQUFPQyxNQUFQLEVBQUwsRUFBc0I7QUFDcEJELGlCQUFhO0FBQ1hFLGdCQUFVO0FBREMsS0FBYjtBQUdEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLHNCQUNFO0FBQUE7QUFBQSxJQUFRLGlDQUFSO0FBQ0U7QUFBQTtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLDJCQUFoQjtBQUNFLDZEQUFZLCtCQUFaLEVBQWtDLFNBQVVKLGVBQTVDLEdBREY7QUFHRSx3REFBTyxNQUFLLFVBQVosRUFBdUIsZ0NBQXZCLEdBSEY7QUFLRSx3REFBTyxNQUFLLEdBQVosRUFBZ0IsK0JBQWhCLEVBQXNDLFNBQVVBLGVBQWhEO0FBTEY7QUFERixDQURGLEVBVUVLLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FWRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYWluIEpTIGZpbGUuXG4gKi9cblxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIERlZmF1bHRSb3V0ZSwgSW5kZXhSb3V0ZSwgaGFzaEhpc3RvcnksIHRyYW5zaXRpb25UbyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9qcy1idWlsZC9hcHAvYXBwLmpzeC5qcyc7XG5pbXBvcnQgV2VsY29tZSBmcm9tICcuL2pzLWJ1aWxkL3dlbGNvbWUvd2VsY29tZS5qc3guanMnO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vanMtYnVpbGQvc2V0dGluZ3Mvc2V0dGluZ3MuanN4LmpzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9qcy1idWlsZC9zZXR0aW5ncy9zZXR0aW5ncy5qcyc7XG5cbi8vIE1pZGRsZXdhcmUgZm9yIHJvdXRlci4gIFJlcm91dGUgdG8gc2V0dGluZ3MgaWZcbi8vIHNldHR0aW5ncyBkb24ndCBleGlzdC5cbmZ1bmN0aW9uIHNldHRpbmdzSGFuZGxlcihuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xuICBpZiAoIWNvbmZpZy5sb2FkZWQoKSkge1xuICAgIHJlcGxhY2VTdGF0ZSh7XG4gICAgICBwYXRobmFtZTogXCJzZXR0aW5nc1wiLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBSZW5kZXIgbWFpbiBjb250ZW50XG4vLyBoYXNoSGlzdG9yeSB3b3JrcyBiZXR0ZXIgd2l0aCBlbGVjdHJvblxucmVuZGVyKFxuICA8Um91dGVyIGhpc3Rvcnk9eyBoYXNoSGlzdG9yeSB9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17IEFwcCB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXsgV2VsY29tZSB9IG9uRW50ZXI9eyBzZXR0aW5nc0hhbmRsZXIgfSAvPlxuXG4gICAgICA8Um91dGUgcGF0aD1cInNldHRpbmdzXCIgY29tcG9uZW50PXsgU2V0dGluZ3MgfSAvPlxuXG4gICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9eyBXZWxjb21lIH0gb25FbnRlcj17IHNldHRpbmdzSGFuZGxlciB9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlmZScpXG4pO1xuIl19