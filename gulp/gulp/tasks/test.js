'use strict'
import gulp from 'gulp'
import istanbul from 'gulp-babel-istanbul'
import mocha from 'gulp-mocha'

gulp.task('pre-test', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', function () {
  return gulp.src(['./test/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports({
      dir: './coverage'
    }))
});