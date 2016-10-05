'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main navigation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Navigation
var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'main' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            { title: 'Settings' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/settings', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fa fa-gear' })
            )
          ),
          _react2.default.createElement(
            'li',
            { title: 'Add' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/add', activeClassName: 'active' },
              _react2.default.createElement('i', { className: 'fa fa-upload' })
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qc3guanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7OzsrZUFKQTs7Ozs7QUFNQTtJQUNNQSxVOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBTSxNQUFYO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUksT0FBTSxVQUFWO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLGVBQU4sRUFBdUIsaUJBQWdCLFFBQXZDO0FBQWdELG1EQUFHLFdBQU0sWUFBVDtBQUFoRDtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSSxPQUFNLEtBQVY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sVUFBTixFQUFrQixpQkFBZ0IsUUFBbEM7QUFBMkMsbURBQUcsV0FBTSxjQUFUO0FBQTNDO0FBREY7QUFKRjtBQURGLE9BREY7QUFZRDs7OztFQWRzQixnQkFBTUMsUzs7a0JBaUJoQkQsVSIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFpbiBuYXZpZ2F0aW9uLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8vIE5hdmlnYXRpb25cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgICAgICAgPExpbmsgdG89e2Avc2V0dGluZ3NgfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj48aSBjbGFzcz1cImZhIGZhLWdlYXJcIj48L2k+PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHRpdGxlPVwiQWRkXCI+XG4gICAgICAgICAgICA8TGluayB0bz17YC9hZGRgfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl19