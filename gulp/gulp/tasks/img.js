'use strict'

import * as pkg from '../../package.json'

import gulp from 'gulp'
import rename from 'gulp-rename';
import sequence from 'run-sequence'
import imagemin from 'gulp-imagemin'
import notify from 'gulp-notify'

const destPath = pkg.config.dest + '/img';
const tmpPath = pkg.config.tmp + '/img';

gulp.task('img:copy-tmp', () => {
  return gulp.src([
      './src/img/**/*.{png,jpg,gif,svg}',
      '!src/img/sprites/**/*.png'
    ])
    .pipe(gulp.dest(tmpPath))
});


gulp.task('img:copy-dest', () => {
  return gulp.src([
      tmpPath + '/*.png'
    ])
    .pipe(gulp.dest(destPath))
});

gulp.task('img:min', () => {
  return gulp.src([
    tmpPath + '/**/*.png'
  ])
    .pipe(imagemin())
    .pipe(gulp.dest(destPath))
});


gulp.task('img', (callback) => {
  return sequence('img:copy-tmp', 'img:copy-dest', 'img:min', callback);
});

gulp.task('build:img', ['img']);