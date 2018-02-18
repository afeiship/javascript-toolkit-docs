(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //watch
  gulp.task('styles:watch', function () {
    gulp.watch('src/sass/**', ['styles']);
  });


}());
