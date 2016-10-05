/**
 * Settings controller
 */

import Config from 'electron-config';
const config = new Config();

// Add some methods
config.loaded = function() {
  return this.store && this.get('path');
}.bind(config);

export default config;
