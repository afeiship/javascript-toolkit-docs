(function () {

  'use strict';

  const gulp = require('gulp');
  const config = require('./config');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles', function () {
    return gulp.src('src/sass/*.scss')
      .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
      .pipe(gulp.dest('src/css'));
  });

}());
