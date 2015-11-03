'use strict';

var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// Serve project with watching and livereload

gulp.task('serve', 'Serve project with livereload and file watching',function (cb) {
  runSequence(
    // 'wiredep',
    // ['styles','templates', 'scripts'],
    'templates',
    // 'modernizr',
    'browser-sync',
    'watch',
    cb
  );
});

gulp.task('serve:dist', 'Build preview', function (cb) {
  runSequence(
    'build',
    'browser-sync:dist',
    cb
  );
});
