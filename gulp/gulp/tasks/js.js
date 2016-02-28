'use strict'
import * as pkg from '../../package.json'
import { webpackConfig } from '../webpack.config'

import gulp from 'gulp'
import webpack from 'gulp-webpack'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import sequence from 'run-sequence'

const destPath = pkg.config.dest + '/js';
const tmpPath = pkg.config.tmp + '/js';


gulp.task('js:webpack', () => {
  return gulp.src([
    './src/js/**/*.js'
  ])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(tmpPath))
});

gulp.task('js:min', () => {
  return gulp.src(tmpPath + '/**/*.js')
    .pipe(uglify())
    .pipe(rename((path) => {
      path.basename += '-' + pkg.config.versions.js.bundle
    }))
    .pipe(gulp.dest(destPath))
});

gulp.task('js', (callback) => {
  return sequence('js:webpack', 'js:min', callback);
});

gulp.task('build:js', ['js']);