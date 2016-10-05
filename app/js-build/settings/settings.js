'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electronConfig = require('electron-config');

var _electronConfig2 = _interopRequireDefault(_electronConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _electronConfig2.default();

// Add some methods
/**
 * Settings controller
 */

config.loaded = function () {
  return this.store && this.get('path');
}.bind(config);

exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL3NldHRpbmdzL3NldHRpbmdzLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImxvYWRlZCIsInN0b3JlIiwiZ2V0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7Ozs7OztBQUNBLElBQU1BLFNBQVMsOEJBQWY7O0FBRUE7QUFQQTs7OztBQVFBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7QUFDekIsU0FBTyxLQUFLQyxLQUFMLElBQWMsS0FBS0MsR0FBTCxDQUFTLE1BQVQsQ0FBckI7QUFDRCxDQUZlLENBRWRDLElBRmMsQ0FFVEosTUFGUyxDQUFoQjs7a0JBSWVBLE0iLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNldHRpbmdzIGNvbnRyb2xsZXJcbiAqL1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJ2VsZWN0cm9uLWNvbmZpZyc7XG5jb25zdCBjb25maWcgPSBuZXcgQ29uZmlnKCk7XG5cbi8vIEFkZCBzb21lIG1ldGhvZHNcbmNvbmZpZy5sb2FkZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3RvcmUgJiYgdGhpcy5nZXQoJ3BhdGgnKTtcbn0uYmluZChjb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=