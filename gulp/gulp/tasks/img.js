'use strict'

import gulp from 'gulp'
import rename from 'gulp-rename';
import sequence from 'run-sequence'
import imagemin from 'gulp-imagemin'
import notify from 'gulp-notify'

gulp.task('img:copy-tmp', () => {
  return gulp.src([
      './src/img/**/*.{png,jpg,gif,svg}',
      '!src/img/sprites/**/*.png'
    ])
    .pipe(gulp.dest('tmp/img'))
});


gulp.task('img:copy-dest', () => {
  return gulp.src([
      './tmp/img/*.png'
    ])
    .pipe(gulp.dest('dest/img'))
});

gulp.task('img:min', () => {
  return gulp.src([
    'dest/img/**/*.png'
  ])
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))
});


gulp.task('img', (callback) => {
  return sequence('img:copy-tmp', 'img:copy-dest', 'img:min', callback);
});

gulp.task('build:img', ['img']);