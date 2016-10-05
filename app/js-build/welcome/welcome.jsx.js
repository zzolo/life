"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Welcome.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Navigation
var Welcome = function (_React$Component) {
  _inherits(Welcome, _React$Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "center-box-container" },
        _react2.default.createElement(
          "div",
          { className: "center-box" },
          _react2.default.createElement(
            "h1",
            null,
            "Life"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("span", { className: "loading" })
          )
        )
      );
    }
  }]);

  return Welcome;
}(_react2.default.Component);

exports.default = Welcome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL3dlbGNvbWUvd2VsY29tZS5qc3guanMiXSwibmFtZXMiOlsiV2VsY29tZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7OzsrZUFIQTs7Ozs7QUFLQTtJQUNNQSxPOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBTSxzQkFBWDtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQU0sWUFBWDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFHLG9EQUFNLFdBQU0sU0FBWjtBQUFIO0FBRkY7QUFERixPQURGO0FBUUQ7Ozs7RUFWbUIsZ0JBQU1DLFM7O2tCQWFiRCxPIiwiZmlsZSI6IndlbGNvbWUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWxjb21lLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBOYXZpZ2F0aW9uXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJveC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1ib3hcIj5cbiAgICAgICAgICA8aDE+TGlmZTwvaDE+XG4gICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XCJsb2FkaW5nXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTtcbiJdfQ==