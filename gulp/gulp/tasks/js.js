'use strict'

import { webpackConfig } from '../webpack.config'

import gulp from 'gulp'
import webpack from 'gulp-webpack'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import sequence from 'run-sequence'


gulp.task('js:webpack', () => {
  return gulp.src([
    './src/js/**/*.js'
  ])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('tmp/js'))
});

gulp.task('js:min', () => {
  return gulp.src('tmp/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dest/js'))
});

gulp.task('js', (callback) => {
  return sequence('js:webpack', 'js:min', callback);
});

gulp.task('build:js', ['js']);