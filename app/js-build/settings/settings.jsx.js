'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Settings.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var dialog = _electron.remote.require('electron').dialog;

// Settings

var Settings = function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.state = {};
    return _this;
  }

  // Select path


  _createClass(Settings, [{
    key: 'selectPath',
    value: function selectPath() {
      var _this2 = this;

      dialog.showOpenDialog({
        properties: ['openDirectory', 'createDirectory']
      }, function (filePath) {
        _this2.setState({ path: filePath });
      });
    }

    // Submit form

  }, {
    key: 'submit',
    value: function submit() {}

    // Render

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'center-box-container' },
        _react2.default.createElement(
          'div',
          { className: 'center-box' },
          _react2.default.createElement(
            'h1',
            null,
            'Settings'
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'name' },
                'Your name'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name', placeholder: 'Your name', value: this.state.name })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'path' },
                'Your files'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'path', placeholder: 'Select path', value: this.state.path, readOnly: true }),
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.selectPath.bind(this) },
                  _react2.default.createElement('i', { className: 'fa fa-folder' })
                )
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary', onClick: this.submit.bind(this) },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return Settings;
}(_react2.default.Component);

exports.default = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL3NldHRpbmdzL3NldHRpbmdzLmpzeC5qcyJdLCJuYW1lcyI6WyJkaWFsb2ciLCJyZXF1aXJlIiwiU2V0dGluZ3MiLCJwcm9wcyIsInN0YXRlIiwic2hvd09wZW5EaWFsb2ciLCJwcm9wZXJ0aWVzIiwiZmlsZVBhdGgiLCJzZXRTdGF0ZSIsInBhdGgiLCJuYW1lIiwic2VsZWN0UGF0aCIsImJpbmQiLCJzdWJtaXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7K2VBSkE7Ozs7O0FBS0EsSUFBTUEsU0FBUyxpQkFBT0MsT0FBUCxDQUFlLFVBQWYsRUFBMkJELE1BQTFDOztBQUVBOztJQUNNRSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7QUFFRDs7Ozs7aUNBQ2E7QUFBQTs7QUFDYkosYUFBT0ssY0FBUCxDQUFzQjtBQUNsQkMsb0JBQVksQ0FBRSxlQUFGLEVBQW1CLGlCQUFuQjtBQURNLE9BQXRCLEVBR0EsVUFBQ0MsUUFBRCxFQUFjO0FBQ1YsZUFBS0MsUUFBTCxDQUFjLEVBQUVDLE1BQU1GLFFBQVIsRUFBZDtBQUNILE9BTEQ7QUFNQzs7QUFFRDs7Ozs2QkFDUyxDQUVSOztBQUVEOzs7OzZCQUNTO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFNLHNCQUFYO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBTSxZQUFYO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQU0sWUFBWDtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFJLE1BQVg7QUFBQTtBQUFBLGVBREY7QUFFRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsV0FBTSxjQUF6QixFQUF3QyxJQUFHLE1BQTNDLEVBQWtELGFBQVksV0FBOUQsRUFBMEUsT0FBUSxLQUFLSCxLQUFMLENBQVdNLElBQTdGO0FBRkYsYUFERjtBQU1FO0FBQUE7QUFBQSxnQkFBSyxXQUFNLFlBQVg7QUFDRTtBQUFBO0FBQUEsa0JBQU8sU0FBSSxNQUFYO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQU0sYUFBWDtBQUNFLHlEQUFPLE1BQUssTUFBWixFQUFtQixXQUFNLGNBQXpCLEVBQXdDLElBQUcsTUFBM0MsRUFBa0QsYUFBWSxhQUE5RCxFQUE0RSxPQUFRLEtBQUtOLEtBQUwsQ0FBV0ssSUFBL0YsRUFBc0csY0FBdEcsR0FERjtBQUVFO0FBQUE7QUFBQSxvQkFBUSxXQUFNLGlCQUFkLEVBQWdDLFNBQVUsS0FBS0UsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBMUM7QUFBdUUsdURBQUcsV0FBTSxjQUFUO0FBQXZFO0FBRkY7QUFGRixhQU5GO0FBY0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFNLGlCQUE1QixFQUE4QyxTQUFVLEtBQUtDLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUF4RDtBQUFBO0FBQUE7QUFkRjtBQUZGO0FBREYsT0FERjtBQXVCRDs7OztFQTlDb0IsZ0JBQU1FLFM7O2tCQWlEZFosUSIsImZpbGUiOiJzZXR0aW5ncy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNldHRpbmdzLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVtb3RlIH0gZnJvbSAnZWxlY3Ryb24nO1xuY29uc3QgZGlhbG9nID0gcmVtb3RlLnJlcXVpcmUoJ2VsZWN0cm9uJykuZGlhbG9nO1xuXG4vLyBTZXR0aW5nc1xuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICAvLyBTZWxlY3QgcGF0aFxuICBzZWxlY3RQYXRoKCkge1xuXHRcdGRpYWxvZy5zaG93T3BlbkRpYWxvZyh7XG4gICAgICBwcm9wZXJ0aWVzOiBbICdvcGVuRGlyZWN0b3J5JywgJ2NyZWF0ZURpcmVjdG9yeScgXVxuXHRcdH0sXG5cdFx0KGZpbGVQYXRoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGF0aDogZmlsZVBhdGggfSk7XG5cdFx0fSk7XG4gIH1cblxuICAvLyBTdWJtaXQgZm9ybVxuICBzdWJtaXQoKSB7XG5cbiAgfVxuXG4gIC8vIFJlbmRlclxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItYm94LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJveFwiPlxuICAgICAgICAgIDxoMT5TZXR0aW5nczwvaDE+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiB2YWx1ZT17IHRoaXMuc3RhdGUubmFtZSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhdGhcIj5Zb3VyIGZpbGVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhdGhcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBwYXRoXCIgdmFsdWU9eyB0aGlzLnN0YXRlLnBhdGggfSByZWFkT25seSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsgdGhpcy5zZWxlY3RQYXRoLmJpbmQodGhpcykgfT48aSBjbGFzcz1cImZhIGZhLWZvbGRlclwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsgdGhpcy5zdWJtaXQuYmluZCh0aGlzKSB9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl19