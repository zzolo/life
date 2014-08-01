/**
 * Menu stuff
 */

var gui = require('nw.gui');
var mb = new gui.Menu({
  type: 'menubar'
});

if (mb.createMacBuiltin) {
  mb.createMacBuiltin('life');
}

gui.Window.get().menu = mb;
