/**
 * Gruntfile for task/build management.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist',
        mac: true,
        win: true,
        linux32: true,
        linux64: true,
        mac_icns: 'app/images/icon_8253.icns'
      },
      src: ['./app/**/*']
    }
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);
};
