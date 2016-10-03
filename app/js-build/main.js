'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _app = require('./js-build/app/app.js');

var _app2 = _interopRequireDefault(_app);

var _welcome = require('./js-build/welcome/welcome.js');

var _welcome2 = _interopRequireDefault(_welcome);

var _settings = require('./js-build/settings/settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render main content
// hashHistory works better with electron
(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _app2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _welcome2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'settings', component: _settings2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _welcome2.default })
  )
), document.querySelector('#life')); /**
                                      * Main JS file.
                                      */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL21haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQSxzQkFDRTtBQUFBO0FBQUEsSUFBUSxpQ0FBUjtBQUNFO0FBQUE7QUFBQSxNQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7QUFDRSw2REFBWSw0QkFBWixHQURGO0FBR0Usd0RBQU8sTUFBSyxVQUFaLEVBQXVCLDZCQUF2QixHQUhGO0FBS0Usd0RBQU8sTUFBSyxHQUFaLEVBQWdCLDRCQUFoQjtBQUxGO0FBREYsQ0FERixFQVVFQSxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBVkYsRSxDQWJBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1haW4gSlMgZmlsZS5cbiAqL1xuXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgaGFzaEhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vanMtYnVpbGQvYXBwL2FwcC5qcyc7XG5pbXBvcnQgV2VsY29tZSBmcm9tICcuL2pzLWJ1aWxkL3dlbGNvbWUvd2VsY29tZS5qcyc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9qcy1idWlsZC9zZXR0aW5ncy9zZXR0aW5ncy5qcyc7XG5cbi8vIFJlbmRlciBtYWluIGNvbnRlbnRcbi8vIGhhc2hIaXN0b3J5IHdvcmtzIGJldHRlciB3aXRoIGVsZWN0cm9uXG5yZW5kZXIoXG4gIDxSb3V0ZXIgaGlzdG9yeT17IGhhc2hIaXN0b3J5IH0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXsgQXBwIH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9eyBXZWxjb21lIH0gLz5cblxuICAgICAgPFJvdXRlIHBhdGg9XCJzZXR0aW5nc1wiIGNvbXBvbmVudD17IFNldHRpbmdzIH0gLz5cblxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXsgV2VsY29tZSB9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlmZScpXG4pO1xuIl19