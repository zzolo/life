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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7OytlQUpBOzs7OztBQU1BO0lBQ01BLFU7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFNLE1BQVg7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSSxPQUFNLFVBQVY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sZUFBTixFQUF1QixpQkFBZ0IsUUFBdkM7QUFBZ0QsbURBQUcsV0FBTSxZQUFUO0FBQWhEO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFJLE9BQU0sS0FBVjtBQUNFO0FBQUE7QUFBQSxnQkFBTSxVQUFOLEVBQWtCLGlCQUFnQixRQUFsQztBQUEyQyxtREFBRyxXQUFNLGNBQVQ7QUFBM0M7QUFERjtBQUpGO0FBREYsT0FERjtBQVlEOzs7O0VBZHNCLGdCQUFNQyxTOztrQkFpQmhCRCxVIiwiZmlsZSI6Im5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1haW4gbmF2aWdhdGlvbi5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vLyBOYXZpZ2F0aW9uXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIHRpdGxlPVwiU2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3NldHRpbmdzYH0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+PGkgY2xhc3M9XCJmYSBmYS1nZWFyXCI+PC9pPjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSB0aXRsZT1cIkFkZFwiPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWRkYH0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+PGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ==