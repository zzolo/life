/**
 * Gulp is used here to quickly process files and reload
 * for development.  35729
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  livereload.listen();

  // HTML
  gulp.watch('index.html')
    .on('change', livereload.changed);

  // JS
  gulp.watch(['js/**/*.js', 'app.js'])
    .on('change', livereload.changed);
});
